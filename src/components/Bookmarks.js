// src/components/Bookmarks.js
import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart to access cart functions
import sampleBookmarks from './sampleBookmarks'; // Correct import for bookmarks
import styles from './Bookmarks.module.css'; // Import the CSS module

const Bookmarks = () => {
    const { addToCart } = useCart(); // Use useCart to get the addToCart function

    const handleAddToCart = (bookmark) => {
        addToCart(bookmark);
    };

    return (
        <div className={styles.bookmarksContainer}>
            <h2>Handmade Customized Bookmarks</h2>
            <div className={styles.bookmarksGallery}> {/* Container for bookmarks */}
                {sampleBookmarks.map((bookmark) => (
                    <div key={bookmark.id} className={styles.bookmarkItem}>
                        <img src={bookmark.imageUrl} alt={bookmark.name} className={styles.bookmarkImage} />
                        <h3>{bookmark.name}</h3>
                        <p>{bookmark.language}</p>
                        <p>{bookmark.size}</p>
                        <p>{bookmark.description}</p>
                        <p className={styles.price}>{bookmark.price}</p> {/* Display price here */}
                        <button onClick={() => handleAddToCart(bookmark)} className={styles.addButton}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookmarks;
