import React from "react";
import { Link } from "react-router-dom";
import "../css/guru.css";

function Guru() {
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

      <section className="guru-hero">
        <h1>Our Guru</h1>

        <p>
          The guiding light behind Natyalaya, dedicated to preserving
          the timeless beauty of Bharatanatyam through discipline,
          devotion, and artistic excellence.
        </p>
      </section>

      <section className="profile-section">
        <div className="profile-container">

          <div className="guru-image">
            <img
              src={require("../images/guru.jpg")}
              alt="Guru"
            />
          </div>

          <div className="guru-content">
            <h5>BHARATANATYAM EXPONENT</h5>

            <h2>
              Guru Rukmini
              <br />
              Vijayakumar
            </h2>

            <div className="designation">
              Dancer • Choreographer • Teacher • Cultural Ambassador
            </div>

            <p>
              With over two decades of experience in Bharatanatyam,
              Guru Rukmini Vijayakumar has inspired generations of
              students through her dedication to traditional dance,
              innovative choreography, and cultural education.
            </p>

            <p>
              Her performances blend spiritual depth, artistic
              precision, and storytelling, making her one of the
              most respected figures in the classical dance community.
            </p>

            <div className="stats-grid">

              <div className="stat-card">
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>

              <div className="stat-card">
                <h3>100+</h3>
                <p>Performances</p>
              </div>

              <div className="stat-card">
                <h3>20+</h3>
                <p>Awards</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-box">
          <h3>A Message From The Guru</h3>

          <p>
            “Bharatanatyam is not learned merely through movement,
            but through discipline, devotion, and surrender.
            Every step carries centuries of wisdom.”
          </p>
        </div>
      </section>

      <section className="awards-section">
        <div className="section-title">
          <h2>Awards & Recognition</h2>
          <p>
            Honouring years of artistic excellence and cultural contribution.
          </p>
        </div>

        <div className="awards-grid">

          <div className="award-card">
            <h3>Natya Kala Ratna</h3>
            <span>2018</span>
          </div>

          <div className="award-card">
            <h3>Nritya Siromani</h3>
            <span>2020</span>
          </div>

          <div className="award-card">
            <h3>Best Classical Mentor</h3>
            <span>2022</span>
          </div>

          <div className="award-card">
            <h3>State Cultural Excellence</h3>
            <span>2023</span>
          </div>

        </div>
      </section>

      <section className="venues-section">
        <div className="section-title">
          <h2>Prestigious Venues</h2>
        </div>

        <div className="venues-grid">
          <div className="venue-card">
            Kapaleeshwarar Temple – Chennai
          </div>

          <div className="venue-card">
            Brihadeeswarar Temple – Thanjavur
          </div>

          <div className="venue-card">
            Meenakshi Temple – Madurai
          </div>

          <div className="venue-card">
            Margazhi Festival – Chennai
          </div>
        </div>
      </section>

      <section className="achievement-section">
        <div className="achievement-card">
          <h2>Students Trained Under Her Guidance</h2>

          <ul>
            <li>✔ 50+ Successful Arangetrams</li>
            <li>✔ National Competition Winners</li>
            <li>✔ International Stage Performers</li>
            <li>✔ Scholarship Award Recipients</li>
            <li>✔ Professional Bharatanatyam Teachers</li>
          </ul>
        </div>
      </section>

      <section className="badge-section">
        <div className="section-title">
          <h2>Highlights</h2>
        </div>

        <div className="badge-container">
          <span>Featured in Cultural Journals</span>
          <span>National Sabha Performer</span>
          <span>International Tours</span>
          <span>Guest Lecturer</span>
          <span>Cultural Ambassador</span>
          <span>Mentor for Young Dancers</span>
        </div>
      </section>

      <section className="guru-cta">
        <h2>Begin Your Bharatanatyam Journey</h2>

        <p>
          Learn under expert guidance rooted in tradition and excellence.
        </p>

        <Link to="/register">
          Register Now
        </Link>
      </section>
      <section className="footer-section">
<div className="footer-container">
<div className="footer-box">
<h3>About Natyalaya</h3>
<p>Preserving the sacred art of Bharatanatyam through dedication, discipline and devotion.</p>
</div>

<div className="footer-box">
<h3>Quick Links</h3>
<Link to="/home">Home</Link>
<Link to="/about">About</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/classes">Classes</Link>
<Link to="/contact">Contact</Link>
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
<p>© 2026 Natyalaya. All Rights Reserved.</p>
<span>"Dance is the hidden language of the soul"</span>
</div>
</section>

    </>
  );
}

export default Guru;