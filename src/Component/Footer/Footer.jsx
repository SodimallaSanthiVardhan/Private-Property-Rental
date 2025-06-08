import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-top">
        <div className="footer-box">
          <h4>Contact Us</h4>
          <p>+91 58483 82818</p>
          <p>santhivardhansodimalla@gmail.com</p>
          <p>AP, Vijayawada, India</p>
        </div>

        <div className="footer-box">
          <h4>Our Services</h4>
          <Link to="/">Home</Link>
          <Link to="">Add Listing</Link>
          <Link to="">Rent</Link>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <Link to="/">Knowledge Base</Link>
          <Link to="/">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h4>Private Property Rental</h4>
          <Link to="/contact">
            <button className="footer-btn">Contact Us</button>
          </Link>
        </div>
      </section>

      <section className="footer-bottom">
        <p>© 2025 Private Property Rental. All rights reserved.</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
