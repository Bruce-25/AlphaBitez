import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styling/Navbar.css";

const Navbar = () => {
  const [showStars, setShowStars] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStarsToggle = () => {
    setShowStars(!showStars);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <div className={`nav-content ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-left">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/order" onClick={() => setIsMenuOpen(false)}>Order</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>

        <div className="nav-right">
          <Link to="/signup" className="btn" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          <Link to="/login" className="btn" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/cart" className="cart-icon" onClick={() => setIsMenuOpen(false)}>
            🛒
          </Link>
        </div>
      </div>

      <button className="stars-btn" onClick={handleStarsToggle}>
        Animation
      </button>

      {showStars && (
        <div className="stars-animation">
          <div className="celestial-objects">
            <div className="star" />
            <div className="moon" />
            <div className="planet" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;