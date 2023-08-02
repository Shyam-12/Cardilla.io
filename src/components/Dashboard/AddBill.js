// components/AddBill.js

import React, { useState } from 'react';
import axios from 'axios';

const AddBill = () => {
  const [formData, setFormData] = useState({
    amount: '',
    dueDate: '',
    currency: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend to create a new bill
    axios
      .post('/api/bills/create', formData)
      .then((res) => {
        console.log('Bill created successfully');
        // Optionally, you can update the list of pending bills after successful creation
      })
      .catch((err) => {
        console.error('Failed to create bill', err);
      });
  };

  return (
    <div>
      <h2>Add Pending Bill</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default AddBill;
