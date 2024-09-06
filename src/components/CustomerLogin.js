// CustomerLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerLogin() {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { accountNumber, password };

    try {
      // Make API call to login customer (replace with actual API endpoint)
      const response = await fetch('http://your-backend-api.com/customer-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // On successful login, navigate to customer dashboard
        navigate('/customer-dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Customer Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Account Number: </label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default CustomerLogin;
