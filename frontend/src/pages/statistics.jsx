import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/statistics.css";
import { FaUsers, FaUserCheck, FaClock, FaRupeeSign } from "react-icons/fa";
import { getStatistics } from "../services/api";
import AdminNavbar from "../components/AdminNavbar";

const Statistics = () => {
  const [data, setData] = useState({ total: 0, approved: 0, pending: 0, monthlyRevenue: 0, batches: [], batchStudents: {} });

  useEffect(() => {
    getStatistics()
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch statistics", err));
  }, []);

  const stats = [
    { title: "Total Students",    value: data.total,                                  icon: <FaUsers /> },
    { title: "Approved Students", value: data.approved,                               icon: <FaUserCheck /> },
    { title: "Pending Approvals", value: data.pending,                                icon: <FaClock /> },
    { title: "Monthly Revenue",   value: `₹${data.monthlyRevenue?.toLocaleString()}`, icon: <FaRupeeSign /> },
  ];

  return (
    <div className="statistics-page">
      <AdminNavbar activePage="statistics" />

      <section className="statistics-hero">
        <h1>Academy Statistics</h1>
        <p>Monitor registrations, revenue, student growth, and batch performance.</p>
      </section>

      {/* STAT CARDS */}
      <section className="statistics-container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BATCH OVERVIEW CARDS */}
      <section className="batch-section">
        <h2>Batch Overview</h2>
        <div className="batch-grid">
          {data.batches.length === 0 ? (
            <p>No batch data available.</p>
          ) : (
            data.batches.map((b, i) => (
              <div className="batch-card" key={i}>
                <FaUsers />
                <h3>{b._id || "Unknown"}</h3>
                <span>{b.count} Students</span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* STUDENTS PER BATCH TABLE */}
      <section className="batch-students-section">
        <h2>Students by Batch</h2>
        {Object.keys(data.batchStudents || {}).length === 0 ? (
          <p>No student data available.</p>
        ) : (
          Object.entries(data.batchStudents).map(([batch, students]) => (
            <div className="batch-table-block" key={batch}>
              <h3>{batch} <span className="batch-count">({students.length} students)</span></h3>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Payment Mode</th>
                      <th>Payment ID</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{s.name || "—"}</td>
                        <td>{s.payment || "—"}</td>
                        <td>{s.paymentId || (s.payment === "Cash" ? "Cash" : "—")}</td>
                        <td>
                          <span className={`badge badge-${s.status?.toLowerCase()}`}>{s.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
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

export default Statistics;
