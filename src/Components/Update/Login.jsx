// import axios from "axios";
// import { useState } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Styling/Login.css';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading("Please wait while we log you in...");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post("https://Bruce25.pythonanywhere.com/api/signin", data);

      if (response.data.user) {
        setLoading("");
        navigate("/"); // Redirect to home on success
      } else {
        setLoading("");
        setError("Invalid login details");
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="fashion-container">
      <div className="fashion-card">
        <h2 className="fashion-title">Log In</h2>

        {loading && <b className="text-success">{loading}</b>}
        {success && <b className="text-success">{success}</b>}
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

          {/* ✅ Forgot password link */}
          <p className="fashion-footer">
            <Link to="/forgot-password" className="fashion-link">Forgot password?</Link>
          </p>

          {/* Signup link */}
          <p>
            Don't have an account? <Link to="/signup" className="text-info">Sign Up</Link>
          </p>
        </form>
      </div>
      <br /><br />
    </div>
  );
};

export default Signin;






// import { Link, useNavigate } from "react-router-dom";

// import './Styling/Login.css';



// const Signin = () => {

//   // Initialize hooks to store user input and handle loading, success, and error states
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState("");
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   // Navigate hook to redirect the user after successful login
//   const navigate = useNavigate();

//   // Function to handle the user sign-in logic
//   const login = async (e) => {
//     e.preventDefault(); // Prevent form submission from reloading the page
//     setLoading("Please wait while we log you in...");

//     try {
//       // Create a new FormData object to send user details to the API
//       const data = new FormData();
//       data.append("email", email);
//       data.append("password", password);

//       // Make API request to the sign-in endpoint
//       const response = await axios.post("https://Bruce25.pythonanywhere.com/api/signin", data);

//       // Check if user data is returned successfully
//       if (response.data.user) {
//         setLoading(""); // Hide loading message
//         navigate("/"); // Redirect to homepage after successful login
//       } else {
//         setLoading(""); // Hide loading message
//         setError("Invalid login details"); // Display error message
//       }
//     } 
//     catch (error) {
//       setLoading(""); // Hide loading message
//       setError(error.message); // Display error message if something goes wrong
//     }
//   };

//   return (
//     <div className="fashion-container">
//       <div className="fashion-card">
//         <h2 className="fashion-title">Log In</h2>

//         {/* Display messages for loading, success, or error */}
//         {loading && <b className="text-success">{loading}</b>}
//         {success && <b className="text-success">{success}</b>}
//         {error && <b className="text-danger">{error}</b>}

//         <form onSubmit={login}>
//           {/* Email input */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="fashion-input"
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required
//           />

//           {/* Password input */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="fashion-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {/* Submit button */}
//           <button className="fashion-button" type="submit">Enter</button>

//           {/* Forgot password link */}
//           <p className="fashion-footer">
//             <span className="fashion-link">Forgot password?</span>
//           </p>

//           {/* Link to signup page */}
//           <p>Don't have an account? <Link to={'/signup'} className="text-info">Sign Up</Link></p>
//         </form>

    
//       </div> <br /> <br />
      
//     </div> 
    
//   );
// };

// export default Signin;