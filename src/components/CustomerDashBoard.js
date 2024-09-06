// src/components/CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import api from '../api';

function CustomerDashBoard() {
  const [accountDetails, setAccountDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const token = localStorage.getItem('customerToken');
        const response = await api.get('/customer/details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAccountDetails(response.data);
      } catch (err) {
        setError('Error fetching account details');
        console.error('Fetch error:', err);
      }
    };

    fetchAccountDetails();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Customer Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {accountDetails ? (
        <div>
          <p><strong>Account Number:</strong> {accountDetails.accountNumber}</p>
          <p><strong>Name:</strong> {accountDetails.name}</p>
          <p><strong>Email:</strong> {accountDetails.email}</p>
          <p><strong>Balance:</strong> ${accountDetails.balance}</p>
          {/* Add more details or transaction options here */}
        </div>
      ) : (
        <p>Loading account details...</p>
      )}
    </div>
  );
}

export default CustomerDashBoard;
