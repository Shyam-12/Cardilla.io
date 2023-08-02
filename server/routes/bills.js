// routes/bills.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/requireAuth');
const Bill = require('../models/Bill');

// Route to create a new bill
router.post('/create', authMiddleware, async (req, res) => {
  try {
    const { amount, dueDate, currency } = req.body;
    const userId = req.user._id;

    const newBill = new Bill({
      amount,
      dueDate,
      currency,
      userId,
      paid: false,
    });
    await newBill.save();

    res.status(201).json({ message: 'Bill created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create bill' });
  }
});

module.exports = router;
