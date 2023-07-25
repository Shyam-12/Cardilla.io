import React from 'react'
import PaymentForm from '../components/PaymentForm';
import { useAuthContext } from '../hooks/useAuthContext';
function Userscreen() {
  const { user } = useAuthContext();
  return (
    <div>
      <h2>{user} Dashboard</h2>
      <PaymentForm />
    </div>
  )
}

export default Userscreen;