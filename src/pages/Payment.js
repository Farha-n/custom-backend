import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for redirection
import paymentQR from '../assets/payment-qr.jpg'; // Adjust the path to your QR code image
import './Payment.css'; // Import the CSS file

function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentScreenshot: null,
  });

  const [paymentStatus, setPaymentStatus] = useState(null); // State to track payment status (success/error)
  const navigate = useNavigate(); // Hook to handle navigation after payment

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, paymentScreenshot: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('address', formData.address);
    form.append('paymentScreenshot', formData.paymentScreenshot);

    try {
      // Make the request but don't store the response
      await axios.post('/api/payments', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setPaymentStatus('success'); // Set payment status to success on successful payment
      alert('Thank you for your payment! Please visit again.');

      // Redirect to Home page after 2 seconds to allow the user to read the message
      setTimeout(() => {
        navigate('/'); // Redirect to the Home page
      }, 2000);
    } catch (error) {
      console.error('Error submitting payment:', error);
      setPaymentStatus('error'); // Set payment status to error on failure
      alert('Error submitting payment');
    }
  };

  return (
    <div className="container">
      <h1>Payment Page</h1>
      <img src={paymentQR} alt="Payment QR Code" className="qr-code" />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange} required></textarea>
        </label>
        <label>
          Upload Payment Screenshot:
          <input type="file" onChange={handleFileChange} accept="image/*" required />
        </label>
        <button type="submit">Submit Payment</button>
      </form>

      {paymentStatus === 'success' && <p>Payment successful! Redirecting...</p>}
      {paymentStatus === 'error' && <p>There was an error submitting your payment. Please try again.</p>}
    </div>
  );
}

export default Payment;
