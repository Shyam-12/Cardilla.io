import React, { useState } from 'react'
import '../../styles/loginform.css'
import { useLogin } from '../../hooks/useLogin';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log(email, password)

        await login(email, password);
    }
  return (
    <div>
        <div className="header">
                <img src="/images/logo.jpg" alt="thirdweb logo" />
                <div className="details">
                    <ul className="navbar-items">
                        <li>Home</li>
                        <li>Features</li>
                        <li>About</li>
                        <li>Docs</li>
                    </ul>
                </div>
        </div>
        <form className='login' onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email:</label>
            <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>password:</label>
            <input 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />
            <button type='submit' disabled={isLoading}>Log In</button>
            {error && <div className='error'>{error}</div>}
        </form>
    </div>
  )
}

export default Login;