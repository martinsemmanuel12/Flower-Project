// components/Footer.js
import React from 'react';
import './Footer.css';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="brand-section">
          <div className="logo">
            <img src="image 3.png" alt="Olive Gardens Logo" />
          </div>
          <p className="tagline">Olive Gardens, where nature thrive</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={16} />
              <span>23 adekule fajuyi way ikeja gra Lagos Nigeria</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>09078468254</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>Olivegardens845@gmail.com</span>
            </div>
          </div>
          
          <div className="social-icons">
            <a href="#" aria-label="Instagram" className="instagram-link">
              <Instagram size={20} className="social-icon instagram-icon" />
            </a>
            <a href="#" aria-label="WhatsApp" className="whatsapp-link">
              <FaWhatsapp size={20} className="social-icon whatsapp-icon" />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="links-sections">
          <div className="links-column">
            <h3>STORE LINKS</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Login/Register</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Regulations</a></li>
              <li><a href="#">Email Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          <p>OLIVE GARDENS © 2026 POWERED BY <a href="#">BUMPA</a>.</p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <div className="back-to-top">
        <a href="#" aria-label="Back to Top">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;