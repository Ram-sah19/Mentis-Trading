require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/zerodha";

const tempHoldings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "GOLDSHARE",
    qty: 1,
    avg: 55.45,
    price: 55.45,
    net: "0.00%",
    day: "+0.18%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.40,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 2,
    avg: 1350.50,
    price: 1385.10,
    net: "+2.56%",
    day: "+1.65%",
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.00,
    price: 207.85,
    net: "+2.89%",
    day: "-2.05%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.30,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.90,
    price: 770.50,
    net: "-4.86%",
    day: "-1.24%",
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.70,
    price: 2112.40,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBILIFE",
    qty: 4,
    avg: 990.90,
    price: 989.00,
    net: "-0.19%",
    day: "+0.85%",
  },
  {
    name: "SBI",
    qty: 4,
    avg: 324.35,
    price: 430.20,
    net: "+32.63%",
    day: "-0.34%",
  },
  {
    name: "TATAMOTORS",
    qty: 5,
    avg: 320.67,
    price: 341.67,
    net: "+6.55%",
    day: "-1.66%",
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.50,
    price: 577.75,
    net: "+18.03%",
    day: "+3.28%",
  },
];

const tempPositions = [
  {
    product: "CNC",
    name: "EICHERMOT",
    qty: 1,
    avg: 2541.50,
    price: 2661.70,
    net: "+4.73%",
    day: "+0.53%",
    isLoss: false,
  },
  {
    product: "MIS",
    name: "TATASTEEL",
    qty: 20,
    avg: 125.30,
    price: 121.20,
    net: "-3.27%",
    day: "+0.45%",
    isLoss: true,
  },
];

async function seedDB() {
  try {
    console.log("Connecting to MongoDB at:", mongoURI);
    await mongoose.connect(mongoURI);
    console.log("Connected successfully. Seeding database...");

    // Clean existing records
    await HoldingsModel.deleteMany({});
    await PositionsModel.deleteMany({});
    await OrdersModel.deleteMany({});
    console.log("Cleared old holdings, positions, and orders.");

    // Seed holdings & positions
    await HoldingsModel.insertMany(tempHoldings);
    await PositionsModel.insertMany(tempPositions);
    console.log("Holdings and Positions data seeded successfully.");

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedDB();
