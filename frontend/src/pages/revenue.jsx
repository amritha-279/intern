import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/revenue.css";
import { FaRupeeSign, FaMoneyBillWave, FaWallet, FaChartLine } from "react-icons/fa";
import { getRevenue } from "../services/api";
import AdminNavbar from "../components/AdminNavbar";

const Revenue = () => {
  const [data, setData] = useState({
    monthlyRevenue: 0,
    yearlyRevenue: 0,
    pendingPayments: 0,
    collectionRate: 0,
    batchRevenue: {},
  });

  useEffect(() => {
    getRevenue()
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch revenue", err));
  }, []);

  return (
    <div className="revenue-page">
      <AdminNavbar activePage="revenue" />

      <section className="revenue-hero">
        <h1>Revenue Analytics</h1>
        <p>Monitor academy earnings, fee collections, pending payments and overall financial growth.</p>
      </section>

      <section className="revenue-container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><FaRupeeSign /></div>
            <h2>₹{data.monthlyRevenue?.toLocaleString()}</h2>
            <p>Monthly Revenue</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaMoneyBillWave /></div>
            <h2>₹{data.yearlyRevenue?.toLocaleString()}</h2>
            <p>Yearly Revenue</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaWallet /></div>
            <h2>₹{data.pendingPayments?.toLocaleString()}</h2>
            <p>Pending Payments</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaChartLine /></div>
            <h2>{data.collectionRate}%</h2>
            <p>Collection Rate</p>
          </div>
        </div>
      </section>

      <section className="batch-section">
        <h2>Revenue by Batch</h2>
        <div className="batch-grid">
          {Object.entries(data.batchRevenue).length === 0 ? (
            <p>No batch revenue data available.</p>
          ) : (
            Object.entries(data.batchRevenue).map(([batch, amount], i) => (
              <div className="batch-card" key={i}>
                <h3>{batch}</h3>
                <span>₹{amount.toLocaleString()}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <footer className="admin-footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through tradition, discipline and excellence.</p>
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
      </footer>
    </div>
  );
};

export default Revenue;
