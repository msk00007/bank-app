// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Bank Application</h1>
      <nav>
        <ul>
          <li><Link to="/customer-login">Customer Login</Link></li>
          <li><Link to="/admin-login">Admin Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
