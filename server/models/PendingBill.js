// models/PendingBill.js

const mongoose = require('mongoose');

const pendingBillSchema = new mongoose.Schema({
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
    default: 'INR',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const PendingBill = mongoose.model('PendingBill', pendingBillSchema);

module.exports = PendingBill;
