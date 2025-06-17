import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Styling/Login.css'; // Ensure this CSS contains the fashion theme

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    setLoading("Please wait while you are being signed up...");
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post("https://Bruce25.pythonanywhere.com/api/signup", data);

      if (response.data.user) {
        setLoading("");
        setSuccess(response.data.message);
        setEmail("");
        setPassword("");
        setPhone("");
      } else {
        setLoading("");
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      setLoading("");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fashion-container">
      <div className="fashion-card">
        <h2 className="fashion-title">Sign Up</h2>

        {loading && <p className="text-success">{loading}</p>}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={signup}>
          <input
            type="email"
            className="fashion-input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="fashion-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="number"
            className="fashion-input"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className="fashion-button">Sign Up</button>

          <p className="fashion-footer">
            Already have an account? <Link to="/login" className="text-info">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;