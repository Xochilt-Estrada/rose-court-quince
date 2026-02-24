import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: "Quince Bouquets",
      description: "Custom-designed bouquets that match your theme and personality. Each rose is carefully selected to create your perfect dream bouquet.",
      price: "Starting at $85",
      icon: "💐",
      features: ["Custom color schemes", "Fresh or silk options", "Matching toss bouquet"]
    },
    {
      id: 2,
      title: "Custom Robes",
      description: "Elegant, personalized robes for the Quinceañera and her court. Made with luxurious fabrics and your choice of embroidery.",
      price: "Starting at $120",
      icon: "👘",
      features: ["Personalized embroidery", "Multiple fabric options", "Court packages available"]
    },
    {
      id: 3,
      title: "Brindis Sets",
      description: "Beautifully crafted toast sets for that special moment. Complete with decorated glasses and elegant presentation box.",
      price: "Starting at $65",
      icon: "🥂",
      features: ["Personalized engraving", "Matching set for couple", "Keepsake box included"]
    },
    {
      id: 4,
      title: "Proposal Boxes",
      description: "Magical proposal boxes to ask your court to be part of your special day. Each box is uniquely designed to surprise and delight.",
      price: "Starting at $45",
      icon: "🎁",
      features: ["Custom message cards", "Mini roses included", "Court member gifts"]
    },
    {
      id: 5,
      title: "Crowns & Tiaras",
      description: "Stunning crowns and tiaras to make you feel like royalty on your special day.",
      price: "Starting at $150",
      icon: "👑",
      features: ["Crystal embellishments", "Custom sizing", "Matching jewelry sets"]
    },
    {
      id: 6,
      title: "Memory Books",
      description: "Beautifully crafted albums to capture every moment of your quince journey.",
      price: "Starting at $75",
      icon: "📖",
      features: ["Personalized covers", "Premium paper", "Keepsake quality"]
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <header className="services-header">
        <Link to="/" className="back-link">
          ← Back to The Rose Court
        </Link>
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Making your quince dreams come true, one detail at a time 🤍</p>
      </header>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-features">
              {service.features.map((feature, index) => (
                <span key={index} className="feature-tag">✨ {feature}</span>
              ))}
            </div>
            <div className="service-price">{service.price}</div>
            <Link to="/contact">
              <button className="inquire-button">Inquire Now</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Special Section */}
      <section className="custom-section">
        <h2>Have Something Special in Mind?</h2>
        <p>We love creating custom pieces! Tell us your vision, and we'll bring it to life.</p>
        <Link to="/contact">
          <button className="custom-button">Contact Us for Custom Orders</button>
        </Link>
      </section>

      {/* Footer with Navigation Links */}
      <footer className="services-footer">
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

export default Services;