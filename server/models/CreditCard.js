// models/CreditCard.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const creditCardSchema = new Schema({
  cardNumber: {
    type: String,
    required: true,
  },
  cardHolderName: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  // Add any other fields related to the credit card here
});

const CreditCard = mongoose.model('CreditCard', creditCardSchema);
module.exports = CreditCard;
