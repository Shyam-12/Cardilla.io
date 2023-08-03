// controllers/creditCardController.js

const Card = require('../models/CreditCard');
const mongoose = require('mongoose');

// const User = require('../models/User');

// Controller to create or update credit card details for a user

// Route to get single card
exports.getCard = async (req, res) => {
  try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ message: 'Bill not found' });
      }

      const card = await Card.findById(id);

      if (!card) {
          return res.status(404).json({ message: 'Bill not found' });
      }

      res.status(200).json(card);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};

// Route to create a new bill
exports.createCard = async (req, res) => {
  try {
      const { cardNumber, cardHolderName, expirationDate, cvv } = req.body;
  
      const newBill = await Card.create({
        cardNumber,
        cardHolderName,
        expirationDate,
        cvv,
      });
  
      res.status(201).json(newBill);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create Card' });
    }
};