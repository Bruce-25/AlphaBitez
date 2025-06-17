import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const img_url = "https://alphabitez.pythonanywhere.com/static/images/";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading("Loading products...");
      try {
        const res = await axios.get("https://alphabitez.pythonanywhere.com/api/getproducts");
        setProducts(res.data);
        setLoading("");
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
        setLoading("");
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`${product.product_name} added to cart`);
    } else {
      alert(`${product.product_name} is already in your cart`);
    }
  };

  const filtered = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home-header">
        <h2>Available Cuisines</h2>
        <input
          type="search"
          placeholder="Search for product name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="cart-button" onClick={() => alert("Cart coming soon!")}>
          🛒 View Cart ({cart.length})
        </button>
      </div>

      {loading && <p className="info-msg">{loading}</p>}
      {error && <p className="error-msg">{error}</p>}

      <div className="product-list">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            {product.product_photo ? (
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product-image"
              />
            ) : (
              <div className="no-image">No Image</div>
            )}

            <h4 className="product-name">{product.product_name}</h4>
            <p className="product-description">Quality and tasty delicacy!</p>
            <p className="product-price">
              {product.price} <span className="currency">KE</span>
            </p>

            {product.product_quantity > 0 ? (
              <div className="product-actions">
                <button
                  className="buy-now"
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Buy Now
                </button>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <span className="out-of-stock">Not Available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;