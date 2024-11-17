import React from 'react';
import sampleFrames from '../sampleFrames';

function Gallery() {
  return (
    <div style={styles.galleryContainer}>
      <h2 style={styles.title}>Our Custom Frames</h2>
      <div style={styles.horizontalScroll}>
        {sampleFrames.map(frame => (
          <div key={frame.id} style={styles.card}>
            <img src={frame.image} alt={frame.name} style={styles.image} />
            <h3 style={styles.name}>{frame.name}</h3>
            <p style={styles.language}>Language: {frame.language}</p>
            <p style={styles.size}>Size: {frame.frameSize}</p>
            <p style={styles.description}>{frame.description}</p>
            <p style={styles.price}>Price: ₹{frame.price}</p> {/* Added price */}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  horizontalScroll: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1.5rem',
    paddingBottom: '1rem',
  },
  card: {
    minWidth: '200px',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.25rem',
    color: '#333',
    margin: '0.5rem 0',
  },
  language: {
    color: '#666',
    marginBottom: '0.5rem',
  },
  size: {
    color: '#666',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#555',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: '0.5rem',
  },
};

export default Gallery;
