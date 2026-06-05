import React, { useState, useEffect } from "react";
import "../css/messages.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaReply, FaCheckCircle, FaClock, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { getMessages, replyMessage, deleteMessage } from "../services/api";

const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const handleSendReply = async (id) => {
    if (!replyText.trim()) return;
    try {
      await replyMessage(id, replyText);
      setReplyingTo(null);
      setReplyText("");
      fetchMessages();
    } catch (error) {
      alert("Failed to send reply.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await deleteMessage(id);
      fetchMessages();
    } catch (error) {
      alert("Failed to delete message.");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("natyalaya_token");
    navigate("/login");
  };

  const total = messages.length;
  const unread = messages.filter((m) => m.status === "Unread").length;
  const responded = messages.filter((m) => m.status === "Responded").length;

  return (
    <div className="messages-page">
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages" className="active">Messages</Link></li>
          <li><Link to="/gallerymanager">Gallery Manager</Link></li>
          <li className="logout-item">
            <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      <section className="messages-hero">
        <h1>Student Messages</h1>
        <p>Manage enquiries, registrations and communication with students and parents.</p>
      </section>

      <section className="message-stats">
        <div className="message-stat-card"><FaEnvelope /><h2>{total}</h2><p>Total Messages</p></div>
        <div className="message-stat-card"><FaClock /><h2>{unread}</h2><p>Unread</p></div>
        <div className="message-stat-card"><FaCheckCircle /><h2>{responded}</h2><p>Responded</p></div>
      </section>

      <section className="messages-container">
        {messages.length === 0 ? (
          <p style={{ textAlign: "center" }}>No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`message-card ${msg.status === "Responded" ? "responded-card" : "unread-card"}`}
            >
              <div className="message-header">
                <div>
                  <h3>{msg.name}</h3>
                  <p>{msg.email} • {msg.subject}</p>
                </div>
                <div className="message-status">
                  <span className={msg.status === "Responded" ? "status-responded" : "status-unread"}>
                    {msg.status}
                  </span>
                  <small>{new Date(msg.createdAt).toLocaleDateString()}</small>
                </div>
              </div>

              <div className="message-content">{msg.message}</div>

              {msg.reply ? (
                <div className="admin-reply">
                  <h4>Admin Reply</h4>
                  <p>{msg.reply}</p>
                </div>
              ) : replyingTo === msg._id ? (
                <div className="reply-box">
                  <textarea
                    className="reply-textarea"
                    placeholder="Type your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={3}
                  />
                  <div className="reply-box-actions">
                    <button className="reply-btn" onClick={() => handleSendReply(msg._id)}>
                      <FaReply /> Send Reply
                    </button>
                    <button className="cancel-btn" onClick={() => setReplyingTo(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <button className="reply-btn" onClick={() => { setReplyingTo(msg._id); setReplyText(""); }}>
                  <FaReply /> Reply
                </button>
              )}

              <button className="cancel-btn" style={{ marginTop: "8px" }} onClick={() => handleDelete(msg._id)}>
                <FaTrash /> Delete
              </button>
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

export default Messages;
