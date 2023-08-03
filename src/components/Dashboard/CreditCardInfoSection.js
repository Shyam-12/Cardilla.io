import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core';

const CreditCardInfoSection = ({ creditCardInfo, handleCreditCardInfoChange, handleCreditCardSubmit }) => {
  const [error, setError] = React.useState(null);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Credit Card Information</Typography>
        <form onSubmit={handleCreditCardSubmit}>
          {/* Credit card form fields */}
          <TextField
            label="Card Number"
            name="cardNumber"
            value={creditCardInfo.cardNumber}
            onChange={handleCreditCardInfoChange}
            fullWidth
            required
          />
          <TextField
            label="Card Holder Name"
            name="cardHolderName"
            value={creditCardInfo.cardHolderName}
            onChange={handleCreditCardInfoChange}
            fullWidth
            required
          />
          <TextField
            label="Expiration Date"
            name="expirationDate"
            type="date" // Set input type as "date" for date picker
            value={creditCardInfo.expirationDate.toISOString().split('T')[0]} // Format the date value for the input field
            onChange={handleCreditCardInfoChange}
            fullWidth
            required
          />
          <TextField
            label="CVV"
            name="cvv"
            type="password"
            value={creditCardInfo.cvv}
            onChange={handleCreditCardInfoChange}
            fullWidth
            required
            inputProps={{
              maxLength: 3, // Add max length to restrict input to 3 characters
            }}
          />
          {/* ... Other credit card form fields ... */}
          <Button type="submit" variant="contained" color="primary">
            Save Credit Card
          </Button>
          {error && <div className='error'>{error}</div>}
        </form>
      </CardContent>
    </Card>
  );
};

export default CreditCardInfoSection;
