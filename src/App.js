import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductCustomization from './pages/ProductCustomization';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
 // Import Footer component

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customize" element={<ProductCustomization />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </div>
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
