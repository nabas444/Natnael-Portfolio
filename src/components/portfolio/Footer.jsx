import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              to="/"
              className="navbar-logo"
              style={{ color: "#e2e8f0", fontSize: "1.3rem" }}
            >
              <span>&lt;</span>
              <span style={{ color: "var(--color-primary-light)" }}>Alex</span>
              <span>Chen /&gt;</span>
            </Link>
            <p>
              Frontend developer passionate about creating beautiful, performant,
              and accessible web experiences.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GH
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LI
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                TW
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Projects</h4>
            <div className="footer-links">
              <Link to="/projects/ecommerce-dashboard">E-Commerce Dashboard</Link>
              <Link to="/projects/social-media-app">Social Connect</Link>
              <Link to="/projects/weather-app">WeatherScope</Link>
              <Link to="/projects/task-manager">TaskFlow Pro</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:alex@example.com">alex@example.com</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
              <span
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                }}
              >
                San Francisco, CA
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Alex Chen. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

