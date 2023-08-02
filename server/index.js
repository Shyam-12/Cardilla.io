require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const paymentRoutes = require('./routes/paymentRoutes');
const userRoutes = require('./routes/user');
const creditCardRoutes = require('./routes/creditCardRoutes');
const pendingBillRouter = require('./routes/pendingBills');
const billsRoute = require('./routes/bills');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI; // Retrieve the URI from the environment variable
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

// Routes
app.use('/api/payments', paymentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/credit-card', creditCardRoutes);
app.use('/api/pendingBills', pendingBillRouter);
app.use('/api/bills', billsRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
