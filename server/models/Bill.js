// models/bill.js

const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
