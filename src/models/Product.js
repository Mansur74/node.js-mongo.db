const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  produceYear: Number,
});

module.exports = mongoose.model("Product", productSchema);