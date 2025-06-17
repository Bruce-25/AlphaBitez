import { useState } from "react";
import { useLocation } from "react-router-dom";
import './Styling/Order.css';

const Order = () => {
  // Use a fallback in case the product object is not available from the location state
  const { state } = useLocation();
  const product = state?.product || {
    type: "Sample Product",
    product_description: "This is a sample product description.",
    product_cost: 1000,
    product_photo: "sample_product.jpg",
  };

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const payNow = async (e) => {
    e.preventDefault();
    setLoading("Processing payment...");

    try {
      // Simulate successful payment response
      setTimeout(() => {
        setLoading("");
        setSuccess("Payment successful! Your order will be processed.");
        setPhone(""); // Clear phone number input after successful payment
      }, 2000); // Simulate delay of 2 seconds
    } catch (err) {
      setLoading("");
      setError("An error occurred. Please try again.");
    }
  };

  const img_url = "https://Bruce25.pythonanywhere.com/static/images/";

  return (
    <div className="row mt-4 p-3">
      {/* Product Display */}
      <div className="col-md-6">
        <div className="card shadow-sm border-0">
          <div className="card-body text-center">
            <img
              src={img_url + product.photo}
              alt={product.type}
              className="w-50 product_img mb-3"
            />
            <h3 className="text-primary fw-bold">{product.type}</h3>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">KES {product.price}</h1>
        <h5 className="text-success fw-semibold">LIPA NA M-PESA</h5>

        <form className="card shadow-sm border-0 p-4 mt-3" onSubmit={payNow}>
          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <input
            type="number"
            value={product.product_cost}
            readOnly
            className="form-control mb-3"
          />

          <input
            type="number"
            placeholder="Enter phone (e.g., 2547XXXXXXXX)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control mb-4"
            required
          />

          <button className="btn btn-dark w-100 fw-bold">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Order;

// import axios from "axios";


// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import './Styling/Order.css';




// const Order = () => {
//     const { product } = useLocation().state || {};

//     const [phone, setPhone] = useState("");
//     const [loading, setLoading] = useState("");
//     const [success, setSuccess] = useState("");
//     const [error, setError] = useState("");
  
//     const payNow = async (e) => {
//       e.preventDefault();
//       setLoading("Processing payment...");
  
//       try {
//         const data = new FormData();
//         data.append("amount", product.product_cost);
//         data.append("phone", phone);
  
//         const response = await axios.post(
//           "https://Bruce25.pythonanywhere.com/api/mpesa_payment",
//           data
//         );
  
//         setLoading("");
//         setSuccess(response.data.message);
//         setPhone("");
//       } catch (err) {
//         setLoading("");
//         setError(err.message);
//       }
//     };
  
//     const img_url = "https://Bruce25.pythonanywhere.com/static/images/";
  
//     return (
//       <div className="row mt-4 p-3">
//         {/* Product Display */}
//         <div className="col-md-6">
//           <div className="card shadow-sm border-0">
//             <div className="card-body text-center">
//               <img
//                 src={img_url + product.product_photo}
//                 alt={product.product_name}
//                 className="w-50 product_img mb-3"
//               />
//               <h3 className="text-primary fw-bold">{product.product_name}</h3>
//             </div>
//           </div>
//         </div>
  
//         {/* Payment Form */}
//         <div className="col-md-6">
//           <h1 className="text-danger fw-bold">KES {product.product_cost}</h1>
//           <p className="text-muted">{product.product_description}</p>
//           <h5 className="text-success fw-semibold">LIPA NA M-PESA</h5>
  
//           <form className="card shadow-sm border-0 p-4 mt-3" onSubmit={payNow}>
//             {loading && <div className="alert alert-info">{loading}</div>}
//             {success && <div className="alert alert-success">{success}</div>}
//             {error && <div className="alert alert-danger">{error}</div>}
  
//             <input
//               type="number"
//               value={product.product_cost}
//               readOnly
//               className="form-control mb-3"
//             />
  
//             <input
//               type="number"
//               placeholder="Enter phone (e.g., 2547XXXXXXXX)"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control mb-4"
//               required
//             />
  
//             <button className="btn btn-dark w-100 fw-bold">Pay Now</button>
//           </form>
//         </div>

//       </div>
//     );
// }

// export default Order