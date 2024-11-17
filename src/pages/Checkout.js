// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Checkout.css'; // Import the CSS file

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        pincode: '',
        state: '',
        district: '',
        email: ''
    });
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate(); // Define navigate for routing

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const applyCoupon = () => {
        if (couponCode === 'SAVE10') {
            setDiscount(10); // Example: 10% discount
            alert('Coupon applied: 10% discount!');
        } else {
            alert('Invalid coupon code!');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const orderDetails = {
            ...formData,
            items: cart,
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderDetails),
            });
            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                clearCart(); // Clear the cart after successful order placement
                navigate('/payment'); // Redirect to payment page
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Error placing order');
        }
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const deliveryCharges = 5; // Example delivery charge
    const totalAmount = totalPrice + deliveryCharges - (totalPrice * (discount / 100));

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Add items to checkout.</p>
            ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h3>Your Order</h3>
                    <ul className="order-list">
                        {cart.map((item) => (
                            <li key={item.id} className="order-item">
                                <h4 className="item-name">{item.name}</h4>
                                <p>{item.language}, {item.size}</p>
                                <p>Price: ₹{item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>

                    <h3>Contact Information</h3>
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                        <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
                        <input type="text" name="state" placeholder="State" onChange={handleChange} required />
                        <input type="text" name="district" placeholder="District" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    </div>

                    <h3>Price Summary</h3>
                    <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
                    <p>Delivery Charges: ₹{deliveryCharges.toFixed(2)}</p>
                    <p>Discount: ₹{((totalPrice * discount) / 100).toFixed(2)}</p>
                    <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>

                    <h3>Coupon Code</h3>
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={handleCouponChange}
                        className="coupon-input"
                    />
                    <button type="button" onClick={applyCoupon} className="apply-coupon-button">Apply Coupon</button>

                    <button type="submit" className="submit-button">Place Order</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
