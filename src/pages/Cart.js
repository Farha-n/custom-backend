// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css'; // Adjust the path based on your project structure

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Include clearCart function
  const navigate = useNavigate(); // Create a navigate instance

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Language: {item.language}</p>
            <p>Frame Size: {item.frameSize}</p>
            <p>Price: ₹{(Number(item.price) || 0).toFixed(2)}</p> {/* Changed to Indian Rupees */}
            <button className="removeButton" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cartActions">
          <button className="clearButton" onClick={clearCart}>Clear Cart</button>
          <button className="checkoutButton" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
