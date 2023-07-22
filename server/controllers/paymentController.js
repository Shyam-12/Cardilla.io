// backend/controllers/paymentController.js
const initiatePayment = async (req, res) => {
    // Mock payment initiation for now
    const { cardNumber, expirationDate, cvv, amount } = req.body;
    const paymentInfo = {
      cardNumber,
      expirationDate,
      cvv,
      amount,
      status: 'success', // or 'failure' if it fails
    };
    res.json(paymentInfo);
  };
  
  module.exports = { initiatePayment };
  