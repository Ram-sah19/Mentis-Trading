const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, enum: ["BUY", "SELL"], required: true },
  createdAt: { type: Date, default: Date.now }
});

const OrdersModel = mongoose.model("Order", OrdersSchema);

module.exports = { OrdersModel };
