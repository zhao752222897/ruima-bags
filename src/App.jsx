import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreHeader } from './components/Header';
import { Footer } from './components/WhyChooseUs';
import { HomePage } from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import SeoContentPage from './pages/SeoContentPage';
import { FloatingContactBar } from './components/FloatingContactBar';

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
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/luggage" element={<SeoContentPage pageKey="luggage" />} />
          <Route path="/backpacks" element={<SeoContentPage pageKey="backpacks" />} />
          <Route path="/crossbody-bags" element={<SeoContentPage pageKey="crossbody-bags" />} />
          <Route path="/oem-odm" element={<SeoContentPage pageKey="oem-odm" />} />
          <Route path="/company-profile" element={<SeoContentPage pageKey="company-profile" />} />
          <Route path="/contact-us" element={<SeoContentPage pageKey="contact-us" />} />
        </Routes>
        <Footer />
        <FloatingContactBar />
      </div>
    </Router>
  );
}

export default App;
