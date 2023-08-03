// components/AddBill.js

import React, { useState } from 'react';
import { useBillsContext } from '../../hooks/useBillsContext';

const AddBill = () => {
  const { dispatch } = useBillsContext();

  const [error, setError] = useState(null);
  // const [formData, setFormData] = useState({
  //   amount: '',
  //   dueDate: '',
  //   currency: '',
  // });
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the backend to create a new bill
    const bill = { amount, dueDate, currency };
    console.log(bill);

    const response = await fetch('/api/bills', {
      method: 'POST',
      body: JSON.stringify(bill),
      headers: {
        "Content-Type" : "application/json"
      }
    });

    const json = await response.json()
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setAmount('');
      setDueDate('');
      setCurrency('');
      setError(null);
      console.log("Bill added successfully!", json);
      dispatch({ type: 'CREATE_BILL', payload: json });
    }
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Bill</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default AddBill;
