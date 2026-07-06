require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/zerodha";

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB at:", mongoURI))
  .catch((err) => console.error("MongoDB connection error:", err));

// REST Endpoints
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.status(200).json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve holdings", details: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve positions", details: err.message });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve orders", details: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ error: "Missing required order parameters (name, qty, price, mode)" });
  }

  try {
    const qtyVal = Number(qty);
    const priceVal = Number(price);

    // Save transaction to execution ledger
    const newOrder = new OrdersModel({
      name,
      qty: qtyVal,
      price: priceVal,
      mode
    });
    await newOrder.save();

    // Portfolio updates:
    // If BUY, insert or update active positions
    // If SELL, decrement position quantity (and remove if qty drops to 0)
    let position = await PositionsModel.findOne({ name });
    
    if (position) {
      if (mode === "BUY") {
        const totalCost = (position.qty * position.avg) + (qtyVal * priceVal);
        position.qty += qtyVal;
        position.avg = Number((totalCost / position.qty).toFixed(2));
      } else {
        position.qty -= qtyVal;
      }

      if (position.qty <= 0) {
        await PositionsModel.deleteOne({ _id: position._id });
      } else {
        const netChange = (((position.price - position.avg) / position.avg) * 100).toFixed(2);
        position.net = (Number(netChange) >= 0 ? "+" : "") + netChange + "%";
        position.isLoss = Number(netChange) < 0;
        await position.save();
      }
    } else {
      if (mode === "BUY") {
        const newPos = new PositionsModel({
          product: "CNC",
          name,
          qty: qtyVal,
          avg: priceVal,
          price: priceVal,
          net: "0.00%",
          day: "+0.00%",
          isLoss: false
        });
        await newPos.save();
      }
    }

    res.status(201).json({ message: "Order processed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: "Failed to process order", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
