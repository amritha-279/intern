import React from "react";
import { Link } from "react-router-dom";
import "../css/about.css";

function About() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={require("../images/logo.png")}
            alt="Natyalaya Logo"
          />
          Natya<span>laya</span>
        </div>

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/guru">Guru</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/classes">Class Schedules</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login" className="logout-btn">Logout</Link></li>
        </ul>
      </nav>

      <section className="about-hero">
        <div className="about-image">
          <img
            src={require("../images/about1.jpg")}
            alt="Bharatanatyam"
          />
        </div>

        <div className="about-content">
          <h4>ABOUT NATYALAYA</h4>

          <h1>Preserving Tradition Through Dance</h1>

          <p>
            Natyalaya is a Bharatanatyam academy dedicated to nurturing
            artistic excellence while preserving India's rich cultural
            heritage. Through disciplined training and guided mentorship,
            students develop confidence, grace, and devotion to classical
            dance.
          </p>

          <p>
            Our academy combines traditional values with modern management,
            creating a seamless learning experience for students, teachers,
            and parents.
          </p>
        </div>
      </section>

      <section className="heritage">
        <div className="section-title">
          <h2>Bharatanatyam Heritage</h2>
          <p>The timeless classical dance of South India</p>
        </div>

        <div className="heritage-box">
          Bharatanatyam is one of India's oldest classical dance forms,
          originating from the temples of Tamil Nadu. It combines rhythm,
          expression, storytelling, and devotion into a powerful art form.
          At Natyalaya, we strive to preserve these traditions while
          inspiring the next generation of dancers.
        </div>
      </section>

      <section className="mission">
        <div className="section-title">
          <h2>Our Purpose</h2>
          <p>Guiding every dancer towards excellence</p>
        </div>

        <div className="mission-container">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To provide authentic Bharatanatyam education that develops
              discipline, confidence, creativity, and cultural awareness in
              every student.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To become a leading Bharatanatyam academy that preserves
              tradition while embracing innovation and accessibility.
            </p>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="section-title">
          <h2>Why Choose Natyalaya</h2>
          <p>Experience excellence in classical dance education</p>
        </div>

        <div className="why-container">
          <div className="why-card">
            <span>🪔</span>
            <h3>Traditional Learning</h3>
            <p>Authentic Guru-Shishya training methods.</p>
          </div>

          <div className="why-card">
            <span>🎭</span>
            <h3>Stage Exposure</h3>
            <p>Regular performances and cultural events.</p>
          </div>

          <div className="why-card">
            <span>🏆</span>
            <h3>Expert Guidance</h3>
            <p>Learn from experienced Bharatanatyam instructors.</p>
          </div>
        </div>
      </section>

      <section className="quote">
        <h2>Dance is the Hidden Language of the Soul</h2>

        <p>
          Through every step, expression, and rhythm, Bharatanatyam tells
          stories that connect tradition, culture, and spirituality.
        </p>
      </section>

      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>
              Preserving the sacred art of Bharatanatyam through tradition,
              discipline, and excellence.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/classes">Class Schedules</Link>
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
          © 2026 Natyalaya | Preserving Tradition Through Technology
        </div>
      </section>
    </>
  );
}

export default About;