// UserLoginForm.js
import React, { useState } from 'react';
import '../../styles/loginform.css';

const LoginForm = () => {
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
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input className='reg-btn' type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input className='reg-btn' type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button className='reg-btn' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
