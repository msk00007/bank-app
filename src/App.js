// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        {/* Add routes for dashboards here */}
      </Routes>
    </Router>
  );
}

export default App;
