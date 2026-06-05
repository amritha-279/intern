import "../css/home.css";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h3>BHARATANATYAM ACADEMY</h3>

          <h1>
            Grace.
            <br />
            Rhythm.
            <br />
            Tradition.
          </h1>

          <p>
            Natyalaya is a Bharatanatyam academy management platform designed
            to preserve classical tradition through modern technology. Manage
            students, dance batches, events, performances, and learning
            journeys with elegance.
          </p>

          <div className="hero-buttons">
            <Link to="/classes" className="btn primary-btn">
              Explore Academy
            </Link>

            <Link to="/gallery" className="btn secondary-btn">
              View Performances
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle-bg"></div>

          <img
            src={require('../images/homepage.jpg')}
            alt="bharatanatyam dancer"
          />
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <h2>Our Features</h2>
          <p>
            Blending classical heritage with smart digital management
          </p>
        </div>

        <div className="feature-container">
          <div className="feature-card">
            <div className="icon">🏅</div>
            <h3>Expert Gurus</h3>
            <p>
              Learn from renowned masters with decades of experience in
              classical Bharatanatyam tradition.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🪔</div>
            <h3>Traditional Training</h3>
            <p>
              Authentic Guru-Shishya parampara methodology preserving ancient
              dance wisdom.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🎭</div>
            <h3>Cultural Excellence</h3>
            <p>
              Immerse yourself in the rich heritage and spiritual essence of
              South Indian culture.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="home-about-image">
          <img
            src={require('../images/homepage2.jpg')}
            alt="dance academy"
          />
        </div>

        <div className="about-text">
          <h2>About Natyalaya</h2>

          <p>
            Rooted in Indian culture and artistic excellence, Natyalaya
            celebrates the beauty of Bharatanatyam while simplifying academy
            management through technology.
          </p>

          <p>
            From student enrollment to performance tracking, our system
            supports every aspect of classical dance education with a refined
            and elegant experience.
          </p>

          <a href="/about" className="btn primary-btn">
            Learn More
          </a>
        </div>
      </section>

      <section className="cta-section">
        <h2>Begin Your Journey Today</h2>

        <p>
          Step into the world of Bharatanatyam and discover the dancer within
          you. Join our academy and become part of a tradition that spans
          centuries.
        </p>

        <Link to="/register" className="cta-btn">
          Join the Academy
        </Link>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Natyalaya</p>
        </div>

        <div className="faq-container">

          <details className="faq-item">
            <summary>What is the minimum age to join Natyalaya?</summary>
            <p>We welcome students from age 5 and above. Our Junior Batch is specially designed for children between 5–14 years with age-appropriate training methods.</p>
          </details>

          <details className="faq-item">
            <summary>Do I need prior dance experience to enroll?</summary>
            <p>No prior experience is required. We have Beginner Batches for absolute newcomers, as well as Intermediate and Advanced batches for those with prior training.</p>
          </details>

          <details className="faq-item">
            <summary>What are the class timings?</summary>
            <p>We offer Morning (6:30 AM – 11:00 AM), Evening (5:00 PM – 9:30 PM), and Weekend batches (8:00 AM – 6:00 PM) to suit different schedules.</p>
          </details>

          <details className="faq-item">
            <summary>How do I register for a class?</summary>
            <p>You can register online through our Register page. Fill in your personal details, select your preferred batch, and submit the form. Our team will confirm your enrollment.</p>
          </details>

          <details className="faq-item">
            <summary>What is the fee structure?</summary>
            <p>Fees vary by batch: Beginner ₹1500/month, Intermediate ₹2000/month, Advanced ₹2500/month, Junior ₹1200/month, Arangetram Preparation ₹5000/month, and Weekend Workshops ₹1000/workshop.</p>
          </details>

          <details className="faq-item">
            <summary>What is Arangetram and how do I prepare for it?</summary>
            <p>Arangetram is a student's debut solo performance — a significant milestone in Bharatanatyam. We offer a dedicated Arangetram Preparation batch with one-on-one mentoring, stage rehearsals, and costume guidance.</p>
          </details>

        </div>
      </section>

      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>
              Preserving the sacred art of Bharatanatyam through traditional
              Guru-Shishya parampara. We nurture dancers to express devotion,
              discipline, and cultural excellence.
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
            <h3>Contact Info</h3>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Natyalaya. All Rights Reserved.</p>
          <span>"Dance is the hidden language of the soul"</span>
        </div>
      </section>
    </>
  );
}

export default Home;