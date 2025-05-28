import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="header">
      {/* logo Container */}
      <div className="logo-container">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
      </div>
      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* cart-section */}
      <div className="cart-container">
        <span>
          <a href="#">Cart</a>
        </span>
      </div>
      {/* login button section */}
      <div className="login-btn-container">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
