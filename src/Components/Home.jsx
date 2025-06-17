import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styling/Home.css";

const Home = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const api_url = "https://alphabitez.pythonanywhere.com/api/getproducts";
  const img_url = "https://alphabitez.pythonanywhere.com/static/images/";

  useEffect(() => {
    sessionStorage.setItem("visitedHome", "true");
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading("Loading products...");
      try {
        const response = await fetch(api_url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
        setLoading("");
      } catch (err) {
        setLoading("");
        setError(err.message || "Something went wrong");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }

    toast.success("Added to cart 🛒", {
      position: "top-right",
      autoClose: 1500,
      pauseOnHover: false,
      theme: "colored",
    });
  };

  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fashion-container">
      <h2 className="fashion-title">Available Cuisines</h2>

      <input
        type="search"
        placeholder="Search for product name"
        className="fashion-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-info">{loading}</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="product-grid">
        {filtered_products.map((product) => (
          <div className="fashion-card" key={product.id}>
            {product.product_photo ? (
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product_img"
              />
            ) : (
              <div className="fashion-no-image">No Image Available</div>
            )}

            <h5 className="text-warning">{product.product_name}</h5>
            <b className="text-success">
              {product.price} <span className="text-info">Kes</span>
            </b>
            <br />

            {product.product_quantity > 0 ? (
              <>
                <button
                  className="fashion-button mt-2"
                  onClick={() => navigate("/makepayments", { state: { product } })}
                >
                  Buy Now
                </button>
                <br />
                <button
                  className="fashion-button mt-2"
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: "#444",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart 🛒
                </button>
              </>
            ) : (
              <span className="text-danger font-weight-bold mt-2 d-block">
                Not Available
              </span>
            )}
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;