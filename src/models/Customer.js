const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  industry: String,
  products : [{name: String, stock: Number, produceYear: Number}]
});

module.exports = mongoose.model("Customer", customerSchema);