import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import FeaturedFrames from '../components/FeaturedFrames';
import Bookmarks from '../components/Bookmarks';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Custom Frame Store</h1>
      <p style={styles.subtitle}>
        Create personalized frames with names in Arabic, Urdu, or English.
      </p>
      <Link to="/customize" style={styles.button}>
        Get Started
      </Link>

      {/* Gallery Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Gallery</h2>
        <Gallery />
      </section>

      {/* Featured Frames Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Frames</h2>
        <FeaturedFrames />
      </section>

      {/* Bookmarks Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Custom Bookmarks</h2>
        <Bookmarks />
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh', // Ensure full viewport height
    paddingBottom: '60px', // To prevent overlap with footer
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '5px',
    marginBottom: '2rem',
  },
  section: {
    width: '100%',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem',
  },
};

export default Home;
