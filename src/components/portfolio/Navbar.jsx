import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import "../../styles/navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" aria-label="Home" onClick={() => setIsOpen(false)}>
          <span>&lt;</span>
          <span className="logo-accent">Nati</span>
          <span>Codes /&gt;</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="navbar-cta">
              <Link
                to="/contact"
                className="btn navbar-hire-btn"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
};

export default Navbar;
