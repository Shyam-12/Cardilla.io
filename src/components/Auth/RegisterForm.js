// UserRegistrationForm.js
import React, { useState } from 'react';
import "../../styles/regForm.css";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <button className='reg-btn'>Login with Google</button>
      <input className='input-details' type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input className='input-details' type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button className='reg-btn' type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
