import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreHeader } from './components/Header';
import { Footer } from './components/WhyChooseUs';
import { HomePage } from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';

/**
 * 🚀 DECISION: CENTRAL ROUTING GATE
 * This file is now ONLY for routing.
 * HomePage and ProductCatalog are completely decoupled.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-[#F4F4F4]">
        <StoreHeader />
        <Routes>
          {/* Main Entry - Synced with GitHub Original Index Design */}
          <Route path="/" element={<HomePage />} />

          {/* Exhaustive Inventory - Independent Data Logic (84 SKUs) */}
          <Route path="/products" element={<ProductCatalog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
