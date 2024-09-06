// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Banking Application</h1>
      <div>
        <Link to="/admin-login">
          <button style={{ margin: '10px' }}>Admin Login</button>
        </Link>
        <Link to="/customer-login">
          <button style={{ margin: '10px' }}>Customer Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
