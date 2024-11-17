import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function ProductCustomization() {
  const { addToCart } = useCart();
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('Arabic');
  const [frameSize, setFrameSize] = useState('Small');
  const [price, setPrice] = useState(0);

  const prices = {
    Arabic: { Small: 750, Medium: 1125, Large: 1500 },
    Urdu: { Small: 900, Medium: 1275, Large: 1650 },
    English: { Small: 825, Medium: 1200, Large: 1575 },
  };

  const handleAddToCart = () => {
    if (!name) {
      alert('Please enter a name!');
      return;
    }

    const item = {
      id: Date.now(), // Unique ID for the item
      name,
      language,
      frameSize,
      price: Number(price), // Ensure price is a number
    };

    console.log(item); // Log the item to verify
    addToCart(item);
    alert(`Added to cart: ${name} in ${language}, Frame size: ${frameSize}, Price: ₹${item.price}`);

    // Reset form after adding to cart
    setName('');
    setLanguage('Arabic');
    setFrameSize('Small');
    setPrice(0);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setPrice(prices[e.target.value][frameSize]);
  };

  const handleSizeChange = (e) => {
    setFrameSize(e.target.value);
    setPrice(prices[language][e.target.value]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Customize Your Frame</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <select
          value={language}
          onChange={handleLanguageChange}
          style={styles.select}
        >
          <option value="Arabic">Arabic (₹750 Small, ₹1125 Medium, ₹1500 Large)</option>
          <option value="Urdu">Urdu (₹900 Small, ₹1275 Medium, ₹1650 Large)</option>
          <option value="English">English (₹825 Small, ₹1200 Medium, ₹1575 Large)</option>
        </select>
        <select
          value={frameSize}
          onChange={handleSizeChange}
          style={styles.select}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <p style={styles.price}>Price: ₹{price}</p>
        <button onClick={handleAddToCart} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '0.5rem',
    margin: '0.5rem 0',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '0.5rem',
    margin: '0.5rem 0',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  price: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0.5rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default ProductCustomization;
