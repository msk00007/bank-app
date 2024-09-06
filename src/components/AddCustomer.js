import React, { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/customers", customer);
      alert("Customer added successfully");
    } catch (error) {
      alert("Error adding customer");
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
        />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
