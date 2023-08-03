// routes/bills.js

const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/requireAuth');
const { createBill, getAllBills, getBill, deleteBill, updateBill } = require('../controllers/billController');

// get all bills
router.get('/', getAllBills);

// get a single bill
router.get('/:id', getBill);

// Route to create a new bill
router.post('/', createBill);

// to delete a bill
router.delete('/:id', deleteBill);

// update a bill
router.patch('/:id', updateBill);

module.exports = router;
