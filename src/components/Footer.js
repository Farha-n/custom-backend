// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // For custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/customize">Customize</Link></li>
          <li><Link to="/payment">Payment</Link></li>
        </ul>
      </nav>
      <p>&copy; 2024 Custom Frame Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
