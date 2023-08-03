const { default: mongoose } = require('mongoose');
const Bill = require('../models/Bill');

// get all bills
exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find({}).sort({dueDate: 1});
        res.status(200).json(bills);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// get a single bill
exports.getBill = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        const bill = await Bill.findById(id);

        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json(bill);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// Route to create a new bill
exports.createBill = async (req, res) => {
    try {
        const { amount, dueDate, currency } = req.body;
    
        const newBill = await Bill.create({
          amount,
          dueDate,
          currency,
          paid: false,
        });
    
        res.status(201).json(newBill);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create bill' });
      }
};
// to delete a bill
exports.deleteBill = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        const bill = await Bill.findOneAndDelete({_id: id});

        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json(bill);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// update a bill
exports.updateBill = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        const bill = await Bill.findOneAndUpdate({_id: id}, {...req.body});

        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json(bill);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};