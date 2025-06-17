import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const img_url = "https://alphabitez.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total cost
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalCost(total);
  }, [cartItems]);

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const products = cartItems.map((item) => ({
      id: item.id,
      product_name: item.product_name,
      product_photo: item.product_photo,
      price: item.price,
      quantity: item.quantity,
    }));

    navigate("/makepayments", { state: { products } }); // ✅ Fixed route
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary">Yuh Shopping Cart</h3>
      {cartItems.length > 0 && (
        <h5 className="text-center text-success">
          Total: <span className="fw-bold">{totalCost} KES</span>
        </h5>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="text-center mb-4">
            <button className="btn btn-danger me-3" onClick={clearCart}>
              Clear Cart
            </button>
            <br />
            <br />
            <button className="btn btn-success" onClick={proceedToCheckout}>
              Proceed to Payment 💳
            </button>
          </div>

          <div className="row g-4">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="fw-bold text-warning">
                      {item.price} KES x {item.quantity} ={" "}
                      {item.price * item.quantity} KES
                    </p>
                    <button
                      className="btn btn-outline-danger mt-2"
                      onClick={() => removeItem(item.id)}
                    >
                      De Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;