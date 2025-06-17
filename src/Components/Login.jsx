import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Styling/Login.css';

axios.defaults.baseURL = "https://alphabitez.pythonanywhere.com";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();
    setLoading("Logging you in...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post("/api/login", formData);

      if (response.data.user) {
        // Save user info in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoading("");
        navigate("/"); // Redirect to home
      } else {
        setLoading("");
        setError("Invalid email or password.");
      }
    } catch (err) {
      setLoading("");
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="fashion-container">
      <div className="fashion-card">
        <h2 className="fashion-title">Log In</h2>

        {loading && <b className="text-success">{loading}</b>}
        {error && <b className="text-danger">{error}</b>}

        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            className="fashion-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="fashion-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="fashion-button" type="submit">Enter</button>

          <p className="fashion-footer">
            <Link to="/forgot-password" className="fashion-link">Forgot password?</Link>
          </p>

          <p>
            Don't have an account? <Link to="/signup" className="text-info">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;