const express = require('express');
const router = express.Router();
const creditCardController = require('../controllers/creditCardController');

// Get credit card details
router.get('/', creditCardController.getCard);

// Create or update credit card details
router.post('/', creditCardController.createCard);

module.exports = router;
