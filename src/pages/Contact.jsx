import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-header contact-header">
            <p className="contact-kicker">Let&apos;s Collaborate</p>
            <h1>Get In Touch</h1>
            <p>Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-info-card">
              <h2>Let's Talk</h2>
              <p>
                I&apos;m currently available for freelance work and full-time frontend
                developer positions. Whether you have a question or just want to say
                hi, my inbox is always open.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FiMail />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Email</h3>
                    <p>natnaelabebe848@gmail.com</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Location</h3>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Phone</h3>
                    <p>+251 966080363</p>
                  </div>
                </div>
              </div>

              <h3 className="contact-social-title">Follow Me</h3>
              <div className="contact-social">
                <a href="https://github.com/nabas444" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/natnael-abebe-883577317" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://t.me/Nabas444" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <FaTelegramPlane />
                </a>
              </div>
            </aside>

            <div className="contact-form-wrapper">
              {submitted && (
                <div className="success-message">
                  Thank you. Your message has been sent successfully. I&apos;ll get back to you soon.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                      placeholder="John Doe"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                      placeholder="john@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    placeholder="Project Inquiry"
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    placeholder="Tell me about your project..."
                    rows={6}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn contact-submit-btn">
                  Send Message -&gt;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
