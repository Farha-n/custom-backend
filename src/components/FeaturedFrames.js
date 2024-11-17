import React from 'react';
import sampleFrames from '../sampleFrames';
import { useCart } from '../context/CartContext';

function FeaturedFrames() {
  const { addToCart } = useCart();

  const handleAddToCart = (frame) => {
    const item = {
      id: Date.now(),
      name: frame.name,
      language: frame.language,
      frameSize: frame.frameSize,
      price: frame.price,
    };
    addToCart(item);
    alert(`Added to cart: ${frame.name} in ${frame.language}, Frame size: ${frame.frameSize}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ready-Made Frames</h2>
      <div style={styles.horizontalScroll}>
        {sampleFrames.map((frame) => (
          <div key={frame.id} style={styles.card}>
            <img src={frame.image} alt={frame.name} style={styles.image} />
            <h3 style={styles.name}>{frame.name}</h3>
            <p style={styles.language}>Language: {frame.language}</p>
            <p style={styles.size}>Size: {frame.frameSize}</p>
            <p style={styles.price}>Price: ₹{frame.price}</p>
            <button onClick={() => handleAddToCart(frame)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    padding: '2rem',
    // textAlign: 'center',
  //   backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  horizontalScroll: {
    display: 'flex',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    gap: '1.5rem',
    justifyContent: 'center', // Center cards on the page
    paddingBottom: '1rem',
  },
  card: {
    flex: '1 1 220px', // Allows cards to resize based on screen width
    maxWidth: '220px',
    padding: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  language: {
    color: '#555',
    fontSize: '0.9rem',
    marginBottom: '0.3rem',
  },
  size: {
    color: '#555',
    fontSize: '0.9rem',
    marginBottom: '0.3rem',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#28a745',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    backgroundColor: 'Green',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100%', // Ensures button spans full width within card
    transition: 'background-color 0.3s ease',
  },
};

export default FeaturedFrames;
