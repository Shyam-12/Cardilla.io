// routes/pendingBills.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/requireAuth');
const PendingBill = require('../models/PendingBill');

// Get all pending bills for the logged-in user
router.get('/api/pendingBills', authMiddleware, async (req, res) => {
  try {
    const user = req.user; // User object from authMiddleware
    const pendingBills = await PendingBill.find({ user: user._id });
    res.json(pendingBills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new pending bill for the logged-in user
router.post('/api/pendingBills', authMiddleware, async (req, res) => {
  try {
    const user = req.user; // User object from authMiddleware
    const { amount, dueDate } = req.body;

    const newPendingBill = new PendingBill({
      amount,
      dueDate,
      user: user._id,
    });

    await newPendingBill.save();
    res.json(newPendingBill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Mark a pending bill as paid
router.put('/api/pendingBills/:id', authMiddleware, async (req, res) => {
  try {
    const user = req.user; // User object from authMiddleware
    const billId = req.params.id;

    const pendingBill = await PendingBill.findOne({ _id: billId, user: user._id });

    if (!pendingBill) {
      return res.status(404).json({ message: 'Pending bill not found' });
    }

    pendingBill.paid = true;
    await pendingBill.save();

    res.json(pendingBill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
