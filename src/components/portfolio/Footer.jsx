import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "../../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo footer-logo">
              <span>&lt;</span>
              <span className="footer-logo-accent">Nati</span>
              <span>Codes /&gt;</span>
            </Link>
            <p>
              Fullstack developer passionate about creating beautiful, performant,
              and accessible web experiences.
            </p>
            <div className="footer-badge">Open to freelance and full-time roles</div>
            <div className="footer-meta">
              <span>Fast Delivery</span>
              <span>Clean Code</span>
              <span>UI + UX Focus</span>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/nabas444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/Nabas444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.linkedin.com/in/natnael-abebe-883577317"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Navigation</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Projects</h3>
            <div className="footer-links">
              <Link to="/projects/ecommerce-dashboard">E-Commerce Dashboard</Link>
              <Link to="/projects/social-media-app">Social Connect</Link>
              <Link to="/projects/weather-app">WeatherScope</Link>
              <Link to="/projects/task-manager">TaskFlow Pro</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-links">
              <a href="mailto:natnaelabebe848@gmail.com">natnaelabebe848@gmail.com</a>
              <a href="tel:+251966080363">+251 966080363</a>
              <a href="tel:+251721677702">+251 721677702</a>
              <span className="footer-location">Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Nati Codes. All rights reserved.</p>
          <p className="footer-tech-note">Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
