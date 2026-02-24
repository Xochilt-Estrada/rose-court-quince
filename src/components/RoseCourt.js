import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RoseCourt.css';

function RoseCourt() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="rose-court">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="rose-petals"></div>
        <h1 className="court-title">The Rose Court</h1>
        <p className="court-subtitle">Where elegance meets enchantment</p>
        
        {/* Button that takes you to services */}
        <Link to="/services">
          <button className="enter-button">
            Explore Our Services
          </button>
        </Link>
        
        {showWelcome && (
          <div className="welcome-message">
            <h2>Welcome, Noble Visitor 🤍</h2>
            <p>You've entered a realm of beauty and grace</p>
          </div>
        )}
      </section>

      {/* Features Section - Your quince services */}
      <section className="features-section">
        <h2>Our Quince Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">💐</span>
            <h3>Bouquets</h3>
            <p>Custom quince bouquets designed just for you</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👘</span>
            <h3>Custom Robes</h3>
            <p>Elegant robes for the court of honor</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🥂</span>
            <h3>Brindis Sets</h3>
            <p>Beautiful toast sets for your special moment</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎁</span>
            <h3>Proposal Boxes</h3>
            <p>Magical boxes to ask your court</p>
          </div>
        </div>
        {/* View All Services button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services">
            <button className="enter-button" style={{ marginTop: 0 }}>
              View All Services →
            </button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Recent Creations</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="gallery-item">
              <div className="rose-placeholder">
                🤍 Quince Creation {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Contact Link */}
      <footer className="court-footer">
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <span className="footer-separator">•</span>
          <Link to="/services" className="footer-link">Services</Link>
          <span className="footer-separator">•</span>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <p>© 2024 The Rose Court • Quince Dreams Come True</p>
        <p>Made with 🤍 for your special day</p>
      </footer>
    </div>
  );
}

export default RoseCourt;