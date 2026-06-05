import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/admin.css";
import { FaUsers, FaClock, FaCheckCircle, FaRupeeSign, FaSignOutAlt } from "react-icons/fa";
import { getStatistics, getStudents, updateStudentStatus, deleteStudent } from "../services/api";

const Admin = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0, monthlyRevenue: 0 });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, studentsRes] = await Promise.all([getStatistics(), getStudents()]);
      setStats(statsRes.data);
      setStudents(studentsRes.data);
    } catch (error) {
      console.error("Failed to fetch admin data", error);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateStudentStatus(id, status);
      fetchData();
    } catch (error) {
      alert("Failed to update status.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await deleteStudent(id);
      fetchData();
    } catch (error) {
      alert("Failed to delete student.");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("natyalaya_token");
    navigate("/login");
  };

  return (
    <>
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin" className="active">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/gallerymanager">Gallery Manager</Link></li>
          <li className="logout-item">
            <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      <section className="admin-hero">
        <div className="admin-hero-text">
          <h1>Admin <span>Dashboard</span></h1>
          <p>Manage student registrations and academy operations</p>
          <div className="admin-hero-meta">
            <div className="hero-badge">{stats.total} Students</div>
            <div className="hero-badge">6 Active Batches</div>
          </div>
        </div>
      </section>

      <main className="admin-main">
        <section className="admin-section">
          <div className="section-header">
            <h2 className="section-title">Dashboard Overview</h2>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-icon"><FaUsers /></div>
              <div className="stat-info">
                <div className="stat-num">{stats.total}</div>
                <div className="stat-label">Total Registrations</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FaClock /></div>
              <div className="stat-info">
                <div className="stat-num">{stats.pending}</div>
                <div className="stat-label">Pending Approvals</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FaCheckCircle /></div>
              <div className="stat-info">
                <div className="stat-num">{stats.approved}</div>
                <div className="stat-label">Approved Students</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FaRupeeSign /></div>
              <div className="stat-info">
                <div className="stat-num">₹{stats.monthlyRevenue?.toLocaleString()}</div>
                <div className="stat-label">Monthly Revenue</div>
              </div>
            </div>
          </div>
        </section>

        <section className="admin-section">
          <div className="section-header">
            <h2 className="section-title">Student Registrations</h2>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Batch</th>
                  <th>Experience</th>
                  <th>Payment Status</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr><td colSpan="6" style={{ textAlign: "center" }}>No students found.</td></tr>
                ) : (
                  students.map((s) => (
                    <tr key={s._id}>
                      <td>{s.firstName} {s.lastName}</td>
                      <td>{s.email}</td>
                      <td>{s.batch}</td>
                      <td>{s.experience}</td>
                      <td>
                        {s.payment === "Online Payment"
                          ? s.paymentId
                            ? <span className="badge badge-approved">Paid</span>
                            : <span className="badge badge-pending">Unpaid</span>
                          : <span className="badge badge-approved">Cash</span>
                        }
                      </td>
                      <td>
                        <span className={`badge badge-${s.status?.toLowerCase()}`}>{s.status}</span>
                      </td>
                      <td className="actions-cell">
                        {s.status === "Pending" && (
                          <>
                            <button className="btn btn-approve btn-sm" onClick={() => handleStatus(s._id, "Approved")}>Approve</button>
                            <button className="btn btn-reject btn-sm" onClick={() => handleStatus(s._id, "Rejected")}>Reject</button>
                          </>
                        )}
                        {s.status !== "Pending" && (
                          <button className="btn btn-view btn-sm" onClick={() => handleStatus(s._id, "Pending")}>Reset</button>
                        )}
                        <button className="btn btn-delete btn-sm" onClick={() => handleDelete(s._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="admin-footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through traditional Guru-Shishya parampara.</p>
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
      </footer>
    </>
  );
};

export default Admin;
