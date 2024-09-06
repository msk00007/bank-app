// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import CustomerForm from './CustomerForm';
import axios from 'axios';

function AdminDashboard() {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null);

  // Fetch customer list (replace with your API call)
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://your-backend-api.com/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  // Delete customer (replace with your API call)
  const deleteCustomer = async (customerId) => {
    try {
      await axios.delete(`http://your-backend-api.com/customers/${customerId}`);
      setCustomers(customers.filter((customer) => customer.id !== customerId));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  // Add or update customer in the list
  const handleSaveCustomer = (customer) => {
    if (editCustomer) {
      setCustomers(
        customers.map((c) =>
          c.id === customer.id ? { ...customer } : c
        )
      );
      setEditCustomer(null);
    } else {
      setCustomers([...customers, customer]);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Admin Dashboard</h1>
      <CustomerForm onSave={handleSaveCustomer} editCustomer={editCustomer} />
      <h2>Customer List</h2>
      <table style={{ margin: '0 auto', width: '60%', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => setEditCustomer(customer)}>Edit</button>
                <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
