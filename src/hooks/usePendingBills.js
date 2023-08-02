import React, { useState } from 'react';

const usePendingBills = (initialBills = []) => {
  const [pendingBills, setPendingBills] = useState(initialBills);

  const addPendingBill = (bill) => {
    setPendingBills([...pendingBills, bill]);
  };

  const markBillAsPaid = (billId) => {
    setPendingBills((prevState) =>
      prevState.map((bill) =>
        bill._id === billId ? { ...bill, paid: true } : bill
      )
    );
  };

  const deleteBill = (billId) => {
    setPendingBills((prevState) => prevState.filter((bill) => bill._id !== billId));
  };

  return { pendingBills, addPendingBill, markBillAsPaid, deleteBill };
};

export default usePendingBills;
