import React, { useEffect, useState } from 'react';
import { useBillsContext } from '../../hooks/useBillsContext';
import '../../styles/pendingBills.css';

import {
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';

const PendingBills = () => {
  const { bills, dispatch } = useBillsContext();
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin'); // Default selected cryptocurrency is bitcoin, you can change it if needed

  useEffect(() => {
    // Fetch pending bills from the backend API
    const fetchBills = async () => {
      const response = await fetch('/api/bills');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_BILLS', payload: json });
      }
    };
    fetchBills();
  }, [dispatch]);

  const handlePayNow = (billId) => {
    // Simulate the payment process
    // console.log(`Payment for bill with ID ${billId} is successful.`);
    // // Update the state to mark the bill as paid (This is just for simulation purposes)
    // setPendingBills((prevState) =>
    //   prevState.map((bill) =>
    //     bill._id === billId ? { ...bill, paid: true } : bill
    //   )
    // );
  };

  const handleDelete = async (billId) => {
    const response = await fetch('/api/bills/' + billId, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_BILL', payload: json });
    }
  };

  const handleCurrencyChange = (event) => {
    setSelectedCrypto(event.target.value);
  };

  // Sample data for cryptocurrency conversion rates (replace with real data)
  const cryptoRates = {
    bitcoin: 2411479.19,
    ethereum: 155090.768079,
    ripple: 90,
    matic: 55.71,
    // Add more cryptocurrency conversion rates here
  };

  const convertToCrypto = (amount) => {
    // Convert the amount to the selected cryptocurrency
    const rate = cryptoRates[selectedCrypto];
    return amount / rate;
  };

  return (
    <div>
      <div className='bills'>
        {/* Dropdown to select the cryptocurrency */}
        <FormControl className='select-crypto'>
          <InputLabel id='crypto-label'>Convert to</InputLabel>
          <Select
            labelId='crypto-label'
            value={selectedCrypto}
            onChange={handleCurrencyChange}
          >
            <MenuItem value='bitcoin'>Bitcoin</MenuItem>
            <MenuItem value='ethereum'>Ethereum</MenuItem>
            <MenuItem value='ripple'>Ripple</MenuItem>
            <MenuItem value='matic'>Matic</MenuItem>
            {/* Add more cryptocurrency options here */}
          </Select>
        </FormControl>
        {bills &&
          bills.map((bill) => (
            <Card className='bill' key={bill._id}>
              <CardContent>
                <div>
                  <p>
                    Amount: {bill.amount} INR |{' '}
                    {convertToCrypto(bill.amount).toFixed(8)}{' '}
                    {selectedCrypto.toUpperCase()}
                  </p>
                  <p>Due Date: {bill.dueDate}</p>
                  {bill.paid ? (
                    <p>Status: Paid</p>
                  ) : (
                    <button onClick={() => handlePayNow(bill._id)}>
                      Pay Now
                    </button>
                  )}
                  <hr />
                  <span onClick={() => handleDelete(bill._id)}>delete</span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default PendingBills;
