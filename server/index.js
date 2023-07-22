require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');

// Middleware
app.use(express.json());
app.use(cors());

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
