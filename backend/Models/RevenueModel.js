const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema({
  batch:  { type: String, required: true },
  amount: { type: Number, required: true },
  month:  { type: String, required: true },
  year:   { type: Number, required: true },
  status: { type: String, default: "Paid" },
}, { timestamps: true });

module.exports = mongoose.model("Revenue", RevenueSchema);
