import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>
            We specialize in IT & Software services, delivering real-world results that are essential in today's rapidly evolving landscape.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" rel="noopener noreferrer" className="icon-circle">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" rel="noopener noreferrer" className="icon-circle">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" rel="noopener noreferrer" className="icon-circle">
              <FaLinkedinIn />
            </a>
            <a href="https://whatsapp.com" rel="noopener noreferrer" className="icon-circle">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section get-in-touch">
          <h2>Get In Touch</h2>
          <p style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>Goregaon (E)<br />Mumbai - 400065</p>
          <p style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}><a href="">info@golokait.com</a></p>
          <p style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>+91 9702729441</p>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe</h2>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Email Address" />
              <button type="submit" className="subscribe-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#00acee" viewBox="0 0 24 24" width="24px" height="24px">
                  <path d="M2 3v18l20-9L2 3zm2.5 3.5L17 12l-12.5 5.5v-11zm1.5 2v7h-1v-7h1zm9 1.5l-5.5-2.5 5.5-2.5v5z"/>
                </svg>
              </button>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">I agree</label>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright 2023 <a href="https://golokait.com">Goloka IT</a> All Rights Reserved.</p>
        <a href="#" className="privacy-policy">Privacy Policy</a>
        <a href="#" className="scroll-up">
          <FaArrowUp /> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
