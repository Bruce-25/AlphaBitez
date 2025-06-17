import React, { useState, useRef } from "react";
import "./Styling/Login.css"; // Reuse same styling

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const inputsRef = useRef([]);

  // Step 1: Simulate sending recovery code
  const sendCode = async (e) => {
    e.preventDefault();
    setLoading("Sending recovery code...");
    setMessage("");

    setTimeout(() => {
      setLoading("");
      setStep(2);
      setMessage("Recovery code sent to your phone (simulated)");
    }, 1500); // Simulated delay
  };

  // Handle user input for verification code
  const handleCodeChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    // If all digits are entered, auto-submit
    if (newCode.every((digit) => digit !== "")) {
      verifyCode(newCode.join(""));
    }
  };

  // Simulate code verification
  const verifyCode = async (fullCode) => {
    setLoading("Verifying code...");

    setTimeout(() => {
      if (fullCode === "123456") {
        setMessage("✅ Code verified! You can now reset your password.");
      } else {
        setMessage("❌ Incorrect code. Try again.");
        setCode(["", "", "", "", "", ""]);
        inputsRef.current[0].focus();
      }
      setLoading("");
    }, 1000); // Simulated delay
  };

  return (
    <div className="fashion-container">
      <div className="fashion-card">
        <h2 className="fashion-title">Recover Password</h2>

        {loading && <b className="text-success">{loading}</b>}
        {message && <b className="text-danger">{message}</b>}

        {step === 1 && (
          <form onSubmit={sendCode}>
            <input
              type="tel"
              placeholder="Phone number"
              className="fashion-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button className="fashion-button" type="submit">Send Code</button>
          </form>
        )}

        {step === 2 && (
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
            {code.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleCodeChange(idx, e.target.value)}
                className="fashion-input"
                style={{ width: "40px", textAlign: "center", fontSize: "18px" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;




// import React, { useState, useRef } from "react";
// import axios from "axios";
// import "./Styling/Login.css"; // Reuse same styling

// const ForgotPassword = () => {
//   const [phone, setPhone] = useState("");
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState("");
//   const [message, setMessage] = useState("");
//   const inputsRef = useRef([]);

//   // Step 1: Send recovery code
//   const sendCode = async (e) => {
//     e.preventDefault();
//     setLoading("Sending recovery code...");
//     setMessage("");

//     try {
//       const response = await axios.post("https://Bruce25.pythonanywhere.com/api/send-code", { phone });
//       if (response.data.success) {
//         setStep(2); // Move to step 2
//         setLoading("");
//       } else {
//         setLoading("");
//         setMessage("Failed to send code. Try again.");
//       }
//     } catch (err) {
//       setLoading("");
//       setMessage("Error: " + err.message);
//     }
//   };

//   // Step 2: Auto-submit when code is filled
//   const handleCodeChange = (index, value) => {
//     if (!/^\d?$/.test(value)) return; // Allow only digits

//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 5) {
//       inputsRef.current[index + 1].focus(); // Move to next input
//     }

//     // Auto-submit if all filled
//     if (newCode.every((digit) => digit !== "")) {
//       verifyCode(newCode.join(""));
//     }
//   };

//   // Verify code
//   const verifyCode = async (fullCode) => {
//     setLoading("Verifying code...");

//     try {
//       const response = await axios.post("", {
//         phone,
//         code: fullCode,
//       });

//       if (response.data.success) {
//         setMessage("Code verified! You can now reset your password.");
//         setLoading("");
//         // Optionally navigate or show reset form
//       } else {
//         setMessage("Incorrect code.");
//         setLoading("");
//       }
//     } catch (err) {
//       setMessage("Verification failed.");
//       setLoading("");
//     }
//   };

//   return (
//     <div className="fashion-container">
//       <div className="fashion-card">
//         <h2 className="fashion-title">Recover Password</h2>

//         {loading && <b className="text-success">{loading}</b>}
//         {message && <b className="text-danger">{message}</b>}

//         {step === 1 && (
//           <form onSubmit={sendCode}>
//             <input
//               type="tel"
//               placeholder="Phone number"
//               className="fashion-input"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <button className="fashion-button" type="submit">Send Code</button>
//           </form>
//         )}

//         {step === 2 && (
//           <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
//             {code.map((digit, idx) => (
//               <input
//                 key={idx}
//                 ref={(el) => (inputsRef.current[idx] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleCodeChange(idx, e.target.value)}
//                 className="fashion-input"
//                 style={{ width: "40px", textAlign: "center", fontSize: "18px" }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;