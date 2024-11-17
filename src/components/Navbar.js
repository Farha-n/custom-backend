// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>Custom Frame Store</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/customize" style={styles.link}>Customize</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  brand: {
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  }
};

export default Navbar;
