import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNavbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("natyalaya_token");
    navigate("/login");
  };

  return (
    <nav className="admin-navbar" ref={navRef}>
      <Link to="/home" className="admin-nav-logo">
        <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
        Natya<span>laya</span>
      </Link>
      <button className="admin-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <ul className={`admin-nav-menu${menuOpen ? " admin-nav-open" : ""}`}>
        <li><Link to="/admin" className={activePage === "dashboard" ? "active" : ""} onClick={close}>Dashboard</Link></li>
        <li><Link to="/statistics" className={activePage === "statistics" ? "active" : ""} onClick={close}>Statistics</Link></li>
        <li><Link to="/revenue" className={activePage === "revenue" ? "active" : ""} onClick={close}>Revenue</Link></li>
        <li><Link to="/messages" className={activePage === "messages" ? "active" : ""} onClick={close}>Messages</Link></li>
        <li><Link to="/gallerymanager" className={activePage === "gallery" ? "active" : ""} onClick={close}>Gallery Manager</Link></li>
        <li className="logout-item">
          <button onClick={() => { close(); handleLogout(); }}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
