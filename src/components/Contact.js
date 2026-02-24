import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';  // Add this import!
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // Add loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Send email using EmailJS
    emailjs.send(
      'Xochie_Wochie',              // Your Service ID
      'template_p860dwo',            // Your Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        service: formData.service,
        message: formData.message,
      },
      '8v8JeosjyHRxOSzxZ'            // Your Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          service: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.log('Email failed to send:', error.text);
      alert('Something went wrong. Please try again or contact us directly at hello@therosecourt.com');
      setIsLoading(false);
    });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <Link to="/" className="back-link">
          ← Back to The Rose Court
        </Link>
        <h1 className="contact-title">Let's Create Magic Together</h1>
        <p className="contact-subtitle">
          Tell us about your quince dreams, and we'll make them come true 🤍
        </p>
      </header>

      <div className="contact-container">
        {/* Contact Info Side */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email Us</h3>
              <p>hello@therosecourt.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Visit Us</h3>
              <p>123 Rose Lane<br />Dream City, CA 12345</p>
            </div>
          </div>

          <div className="info-hours">
            <h3>Hours of Grace</h3>
            <p>Monday - Friday: 10am - 6pm</p>
            <p>Saturday: 11am - 4pm</p>
            <p>Sunday: By appointment</p>
          </div>

          <div className="info-social">
            <h3>Follow Our Court</h3>
            <div className="social-icons">
              <span className="social-icon">📷</span>
              <span className="social-icon">🎵</span>
              <span className="social-icon">📌</span>
              <span className="social-icon">💫</span>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              <span className="success-icon">🤍</span>
              <h2>Thank You, Noble Visitor!</h2>
              <p>Your message has been received. We'll reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Us a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Quince Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="bouquet">Quince Bouquet</option>
                    <option value="robes">Custom Robes</option>
                    <option value="brindis">Brindis Set</option>
                    <option value="proposal">Proposal Box</option>
                    <option value="crown">Crown/Tiara</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your vision..."
                  rows="5"
                />
              </div>

              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Sending... 🤍' : 'Send Message 🤍'}
              </button>

              <p className="form-note">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Our Court</h2>
        <div className="map-placeholder">
          <div className="map-overlay">
            <p>📍 The Rose Court</p>
            <p>123 Rose Lane, Dream City</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;