// import axios from 'axios';
// import { useState } from 'react';

// const Addproducts = () => {
//   const [product_name, setProductName] = useState("");
//   const [price, setPrice] = useState("");
//   const [product_quantity, setProductQuantity] = useState("");
//   const [product_photo, setProductPhoto] = useState(null);

//   const [loading, setLoading] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [imagePreview, setImagePreview] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading("Please wait ...");
//     setMessage("");
//     setError("");

//     const data = new FormData();
//     data.append("product_name", product_name);
//     data.append("price", price);
//     data.append("product_quantity", product_quantity);
//     data.append("product_photo", product_photo);

//     try {
//       const response = await axios.post(
//         "https://alphabitez.pythonanywhere.com/api/addproduct",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setLoading("");
//       setMessage(response.data.Message || "Product added successfully!");
//       setProductName("");
//       setPrice("");
//       setProductQuantity("");
//       setProductPhoto(null);
//       setImagePreview("");

//       setTimeout(() => setMessage(""), 3000);
//     } catch (err) {
//       setLoading("");

//       // Detailed backend error handling
//       if (err.response && err.response.data && err.response.data.Message) {
//         setError(err.response.data.Message);
//       } else {
//         setError("Failed to add product. Please try again.");
//       }

//       setTimeout(() => setError(""), 3000);
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setProductPhoto(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImagePreview(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6 card shadow p-4">
//         <form onSubmit={submit}>
//           <h2 className="text-center mb-3">Add Product</h2>

//           {loading && <div className="alert alert-info">{loading}</div>}
//           {message && <div className="alert alert-success">{message}</div>}
//           {error && <div className="alert alert-danger">{error}</div>}

//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter product name"
//             value={product_name}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//           />
//           <br />

//           <input
//             type="number"
//             placeholder="Enter price (KES)"
//             className="form-control"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//           <br />

//           <input
//             type="number"
//             placeholder="Enter quantity"
//             className="form-control"
//             value={product_quantity}
//             onChange={(e) => setProductQuantity(e.target.value)}
//             required
//           />
//           <br />

//           <input
//             type="file"
//             className="form-control"
//             accept="image/*"
//             onChange={handlePhotoChange}
//             required
//           />
//           {imagePreview && (
//             <div className="mt-2 text-center">
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 style={{ maxHeight: "150px", borderRadius: "8px" }}
//               />
//             </div>
//           )}
//           <br />

//           <button type="submit" className="btn btn-primary w-100">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addproducts;