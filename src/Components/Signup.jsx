import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Styling/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we submit your details...");
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);

      const response = await axios.post("https://alphabitez.pythonanywhere.com/api/signup", formData);

      setLoading("");
      setSuccess(response.data.message);
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    
    <>
    
      <section className="fashion-container">
        <div className="fashion-card">
          <h3 className="fashion-title">Sign Up</h3>

          {loading && <b className="text-success">{loading}</b>}
          {success && <b className="text-success">{success}</b>}
          {error && <b className="text-danger">{error}</b>}

          <form onSubmit={register}>
            <input
              type="email"
              className="fashion-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="fashion-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="text"
              className="fashion-input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" className="fashion-button">Sign Up</button>
          </form>

          <div className="fashion-footer">
            Already have an account?{" "}
            <Link to="/signin" className="fashion-link">Sign In</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;