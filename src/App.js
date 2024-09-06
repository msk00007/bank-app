// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import CustomerLogin from './components/CustomerLogin';
import AdminLogin from './components/AdminLogin';
import CustomerDashboard from './components/CustomerDashBoard';
import AdminDashboard from './components/AdminDashBoard';
import LandingPage from './components/LandingPage'; // Import your LandingPage component

// Create Axios instance
const api = axios.create({
  baseURL: 'http://your-backend-api.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// App Component
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInRole, setLoggedInRole] = useState(null); // 'customer' or 'admin'

  const handleCustomerLoginSuccess = (user) => {
    setLoggedInUser(user);
    setLoggedInRole('customer');
    localStorage.setItem('customerToken', user.token);
  };

  const handleAdminLoginSuccess = (user) => {
    setLoggedInUser(user);
    setLoggedInRole('admin');
    localStorage.setItem('adminToken', user.token);
  };

  

  return (
    <Router>
      <div>

        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Customer Routes */}
          <Route path="/customer-login" element={
            loggedInUser && loggedInRole === 'customer' ? (
              <Navigate to="/customer-dashboard" />
            ) : (
              <CustomerLogin onLoginSuccess={handleCustomerLoginSuccess} />
            )
          } />
          <Route path="/customer-dashboard" element={
            loggedInUser && loggedInRole === 'customer' ? (
              <CustomerDashboard />
            ) : (
              <Navigate to="/customer-login" />
            )
          } />

          {/* Admin Routes */}
          <Route path="/admin-login" element={
            loggedInUser && loggedInRole === 'admin' ? (
              <Navigate to="/admin-dashboard" />
            ) : (
              <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />
            )
          } />
          <Route path="/admin-dashboard" element={
            loggedInUser && loggedInRole === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin-login" />
            )
          } />

          {/* Redirect all unknown paths to landing page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
