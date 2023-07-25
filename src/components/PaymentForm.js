// frontend/src/components/PaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/paymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    amount: '',
    cryptocurrency: 'usdt',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/payments/initiate', formData);
      console.log('Payment response:', res.data);
      // Handle payment response here (display confirmation message, etc.)
    } catch (error) {
      console.error('Error during payment:', error);
      // Handle payment error here
    }
  };

  return (
    <div className="form">
        <form onSubmit={handlePayment}>
        <div className= "input-container">
                <input 
                    className="input"
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Card Number"
                />
                <div class="cut"></div>
                <input
                    className="input"
                    type="Date"
                    name="Expiration Date"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    placeholder="Expiry Date"
                />
                <div class="cut"></div>
                <input
                    className="input"
                    type="number"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="cvv"
                />
                <div class="cut"></div>
                <input
                    className="input"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                />
                <div class="cut"></div>
                <select name="cryptocurrency" onChange={handleChange} className="input">
                    <option value="USDT">USDT</option>
                    <option value="MATIC">MATIC</option>
                    <option value="ETH">ETH</option>
                </select>
                <div class="cut"></div>
                <button className='submit' type="submit">Pay</button>
            </div>
        </form>
    </div>
  );
};

export default PaymentForm;
