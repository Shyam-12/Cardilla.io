// controllers/creditCardController.js

const CreditCard = require('../models/CreditCard');
const User = require('../models/User');

// Controller to create or update credit card details for a user
exports.createOrUpdateCreditCard = async (req, res) => {
  try {
    const { cardNumber, cardHolderName, expirationDate, cvv } = req.body;

    // Check if the user already has a credit card entry in the database
    let creditCard = await CreditCard.findOne({ user: req.user.id });

    if (!creditCard) {
      // If no credit card entry exists, create a new one
      creditCard = new CreditCard({
        cardNumber,
        cardHolderName,
        expirationDate,
        cvv,
      });

      // Associate the credit card with the user
      creditCard.user = req.user.id;
      await creditCard.save();

      // Update the user's creditCard field with the credit card's ObjectId
      const user = await User.findById(req.user.id);
      user.creditCard = creditCard._id;
      await user.save();
    } else {
      // If credit card entry exists, update the existing entry
      creditCard.cardNumber = cardNumber;
      creditCard.cardHolderName = cardHolderName;
      creditCard.expirationDate = expirationDate;
      creditCard.cvv = cvv;
      await creditCard.save();
    }

    res.status(200).json({ message: 'Credit card details saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving credit card details.' });
  }
};
