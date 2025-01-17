// src/components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import api from '../api';

function CustomerForm({ onSave, editCustomer }) {
  const [customer, setCustomer] = useState({ id: '', name: '', email: '', phone: '' });

  useEffect(() => {
    if (editCustomer) {
      setCustomer(editCustomer);
    } else {
      setCustomer({ id: '', name: '', email: '', phone: '' });
    }
  }, [editCustomer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editCustomer ? 'PUT' : 'POST';
      const url = editCustomer
        ? `/customers/${customer.id}`
        : '/customers';

      if (editCustomer) {
        // Update customer
        await api.put(url, customer);
      } else {
        // Add new customer
        await api.post(url, customer);
      }

      onSave(customer);
      setCustomer({ id: '', name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  return (
    <div>
      <h2>{editCustomer ? 'Edit' : 'Add'} Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={customer.id}
          onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          required
        />
        <button type="submit">{editCustomer ? 'Update' : 'Add'} Customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
