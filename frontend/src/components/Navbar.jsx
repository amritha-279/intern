import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);
  const close = () => setMenuOpen(false);

  const isLoggedIn = !!(localStorage.getItem("natyalaya_token") || sessionStorage.getItem("natyalaya_token"));

  const handleLogout = () => {
    localStorage.removeItem("natyalaya_token");
    localStorage.removeItem("natyalaya_user");
    sessionStorage.removeItem("natyalaya_token");
    sessionStorage.removeItem("natyalaya_session");
    close();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav ref={navRef}>
      <Link to="/home" className="logo">
        <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
        Natya<span>laya</span>
      </Link>
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
        <li><Link to="/register" onClick={close}>Form</Link></li>
        {isLoggedIn
          ? <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          : <li><Link to="/login" className="logout-btn" onClick={close}>Login</Link></li>
        }
      </ul>
    </nav>
  );
}

export default Navbar;
