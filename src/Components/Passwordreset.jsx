import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("email", email);

      const response = await axios.post("https://taliban.pythonanywhere.com/api/forgot-password", data);

      if (response.data.success) {
        setSuccess("Check your email for password reset instructions.");
      } else {
        setError(response.data.message || "An error occurred.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h2>Forgot Password</h2>
        <p>Enter your email to receive password reset instructions.</p>

        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;