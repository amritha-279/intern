import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/contact.css";
import { submitContact } from "../services/api";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    const nameReg = /^[A-Za-z\s]{2,}$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { name, email, subject, message } = formData;

    if (!nameReg.test(name))
      return alert("Enter a valid full name.");

    if (!emailReg.test(email))
      return alert("Enter a valid email address.");

    if (subject.length < 3)
      return alert("Please enter a subject.");

    if (message.length < 10)
      return alert(
        "Message must be at least 10 characters."
      );

    try {
      await submitContact({ name, email, subject, message });
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send message.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Address</h4>
              <p>
                Natyalaya Academy,
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <span>✉</span>
            <div>
              <h4>Email</h4>
              <p>info@natyalaya.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>🕐</span>
            <div>
              <h4>Hours</h4>
              <p>
                Mon – Sat:
                9:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send a Message</h2>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Subject</label>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="submit-btn"
            onClick={sendMessage}
          >
            Send Message
          </button>

        </div>

      </section>

      <section className="footer-section">

        <div className="footer-container">

          <div className="footer-box">
            <h3>About Natyalaya</h3>

            <p>
              Preserving the sacred art of
              Bharatanatyam through tradition,
              discipline and excellence.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/classes">
              Class Schedules
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
          </div>

          <div className="footer-box">
            <h3>Customer Policy</h3>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/home#faq">FAQ</Link>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Natyalaya |
          Preserving Tradition Through Technology
        </div>

      </section>
    </>
  );
}

export default Contact;