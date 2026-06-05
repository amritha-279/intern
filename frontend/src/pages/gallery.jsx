import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/gallery.css";
import { getGallery } from "../services/api";

const LOCAL_FALLBACK = [
  { _id: "1", title: "Classical Performance", description: "Students showcasing the elegance and discipline of Bharatanatyam on stage.",    imagePath: null, localImage: require("../images/gallery1.jpg") },
  { _id: "2", title: "Arangetram Ceremony",   description: "A proud milestone celebrating years of dedication and learning.",                imagePath: null, localImage: require("../images/gallery2.jpg") },
  { _id: "3", title: "Cultural Festival",     description: "Celebrating Indian heritage through music, rhythm and dance.",                   imagePath: null, localImage: require("../images/gallery3.jpg") },
  { _id: "4", title: "Temple Recital",        description: "Traditional performances inspired by devotion and spirituality.",                imagePath: null, localImage: require("../images/gallery4.jpg") },
  { _id: "5", title: "Dance Workshop",        description: "Learning advanced techniques under experienced Bharatanatyam gurus.",            imagePath: null, localImage: require("../images/gallery5.jpg") },
  { _id: "6", title: "Annual Celebration",    description: "Students and mentors coming together to celebrate artistic excellence.",         imagePath: null, localImage: require("../images/gallery6.jpg") },
  { _id: "7", title: "Group Performance",     description: "Synchronised expressions and movements creating visual storytelling.",           imagePath: null, localImage: require("../images/gallery7.jpg") },
  { _id: "8", title: "Traditional Costume",   description: "Capturing the beauty of Bharatanatyam attire and ornaments.",                   imagePath: null, localImage: require("../images/gallery8.png") },
  { _id: "9", title: "Student Showcase",      description: "Young dancers expressing confidence, grace and cultural pride.",                 imagePath: null, localImage: require("../images/gallery9.jpg") },
];

function Gallery() {
  const [items, setItems] = useState(LOCAL_FALLBACK);

  useEffect(() => {
    getGallery()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          // merge backend data with local descriptions as fallback
          const merged = res.data.map((item) => {
            if (!item.description) {
              const match = LOCAL_FALLBACK.find((f) => f.title === item.title);
              return { ...item, description: match ? match.description : "" };
            }
            return item;
          });
          setItems(merged);
        }
      })
      .catch(() => {});
  }, []);

  const getImageSrc = (item) => {
    if (item.imagePath) return `https://natyalaya-backend.onrender.com${item.imagePath}`;
    if (item.localImage) return item.localImage;
    return "";
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
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

      <section className="gallery-hero">
        <h4>NATYALAYA GALLERY</h4>
        <h1>Moments of Grace & Tradition</h1>
        <p>
          Explore performances, arangetrams, workshops,
          cultural celebrations and unforgettable moments
          from our Bharatanatyam journey.
        </p>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {items.map((item) => (
            <div className="gallery-card" key={item._id}>
              <div className="gallery-img-wrap">
                <img src={getImageSrc(item)} alt={item.title} />
              </div>
              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <h2>Every Pose Tells A Story</h2>
        <p>
          Through rhythm, expression and devotion,
          Bharatanatyam transforms movement into art and
          keeps our cultural heritage alive for future generations.
        </p>
      </section>

      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through tradition, discipline and excellence.</p>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/classes">Class Schedules</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="footer-box">
            <h3>Contact</h3>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Natyalaya | Bharatanatyam Academy Management System
        </div>
      </section>
    </>
  );
}

export default Gallery;
