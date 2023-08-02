// routes/creditCardRoutes.js

const express = require('express');
const router = express.Router();
const creditCardController = require('../controllers/creditCardController');
// const authMiddleware = require('../middleware/requireAuth');

// Create or update credit card details
router.post('/credit-card', creditCardController.createOrUpdateCreditCard);

module.exports = router;
