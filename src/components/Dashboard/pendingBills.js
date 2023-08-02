import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PendingBills = () => {
  const [pendingBills, setPendingBills] = useState([]);

  useEffect(() => {
    // Fetch pending bills from the backend API
    axios
      .get('/api/pendingBills')
      .then((res) => setPendingBills(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handlePayNow = (billId) => {
    // Simulate the payment process
    console.log(`Payment for bill with ID ${billId} is successful.`);
    // Update the state to mark the bill as paid (This is just for simulation purposes)
    setPendingBills((prevState) =>
      prevState.map((bill) =>
        bill._id === billId ? { ...bill, paid: true } : bill
      )
    );
  };

  return (
    <div>
      <h2>Pending Bills</h2>
      {pendingBills.map((bill) => (
        <div key={bill._id}>
          <p>Amount: {bill.amount}</p>
          <p>Due Date: {bill.dueDate}</p>
          {bill.paid ? (
            <p>Status: Paid</p>
          ) : (
            <button onClick={() => handlePayNow(bill._id)}>Pay Now</button>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PendingBills;
