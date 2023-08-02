// backend/controllers/paymentController.js

const initiatePayment = async (req, res) => {
    // Mock payment initiation for now
    const { cardNumber, expirationDate, cvv, amount, cryptocurrency } = req.body;
    const paymentInfo = {
      cardNumber,
      expirationDate,
      cvv,
      amount,
      cryptocurrency,
      status: 'success', // or 'failure' if it fails
    };
    res.json(paymentInfo);
  };
  
  module.exports = { initiatePayment };
  