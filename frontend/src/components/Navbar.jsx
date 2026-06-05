import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav>
      <div className="logo">
        <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
        Natya<span>laya</span>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <ul className={menuOpen ? "nav-open" : ""}>
        <li><Link to="/home" onClick={close}>Home</Link></li>
        <li><Link to="/about" onClick={close}>About</Link></li>
        <li><Link to="/guru" onClick={close}>Guru</Link></li>
        <li><Link to="/gallery" onClick={close}>Gallery</Link></li>
        <li><Link to="/classes" onClick={close}>Class Schedules</Link></li>
        <li><Link to="/contact" onClick={close}>Contact</Link></li>
        <li><Link to="/register" onClick={close}>Register</Link></li>
        <li><Link to="/login" className="logout-btn" onClick={close}>Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
