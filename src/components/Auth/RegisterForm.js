// UserRegistrationForm.js
import React, { useState } from 'react';
import "../../styles/regForm.css";
import {useNaviage, Link } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:3000/signup', {
        username,password
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <button className='reg-btn'>Login with Web3Auth</button>
        <button className='reg-btn'>Login with Wallet</button>
        <button className='reg-btn'>Login with Magic.Link</button>
        <input className='reg-btn' type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
        <input className='reg-btn' type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <button className='reg-btn' type="submit">Login</button>
      </form>

      <br></br>

      <Link to="/signup">Sign Up Page</Link>
    </div>
  );
};

export default RegisterForm;
