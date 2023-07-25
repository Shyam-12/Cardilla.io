// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.post('/initiate', paymentController.initiatePayment);

module.exports = router;
