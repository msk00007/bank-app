// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { username, password };

    try {
      // Make API call to login admin (replace with actual API endpoint)
      const response = await fetch('http://your-backend-api.com/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // On successful login, navigate to admin dashboard
        navigate('/admin-dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

export default AdminLogin;
