import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send credentials to the server for verification
      const response = await axios.post("/api/login", credentials);

      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
