import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/gallerymanager.css";
import { FaImages, FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaSave, FaTimes } from "react-icons/fa";
import { getGallery, uploadGalleryImage, deleteGalleryImage, updateGalleryImage } from "../services/api";

const DEFAULT_ITEMS = [
  { title: "Classical Performance", description: "Students showcasing the elegance and discipline of Bharatanatyam on stage.",      localImage: require("../images/gallery1.jpg") },
  { title: "Arangetram Ceremony",   description: "A proud milestone celebrating years of dedication and learning.",                  localImage: require("../images/gallery2.jpg") },
  { title: "Cultural Festival",     description: "Celebrating Indian heritage through music, rhythm and dance.",                     localImage: require("../images/gallery3.jpg") },
  { title: "Temple Recital",        description: "Traditional performances inspired by devotion and spirituality.",                  localImage: require("../images/gallery4.jpg") },
  { title: "Dance Workshop",        description: "Learning advanced techniques under experienced Bharatanatyam gurus.",              localImage: require("../images/gallery5.jpg") },
  { title: "Annual Celebration",    description: "Students and mentors coming together to celebrate artistic excellence.",           localImage: require("../images/gallery6.jpg") },
  { title: "Group Performance",     description: "Synchronised expressions and movements creating visual storytelling.",             localImage: require("../images/gallery7.jpg") },
  { title: "Traditional Costume",   description: "Capturing the beauty of Bharatanatyam attire and ornaments.",                     localImage: require("../images/gallery8.png") },
  { title: "Student Showcase",      description: "Young dancers expressing confidence, grace and cultural pride.",                   localImage: require("../images/gallery9.jpg") },
];

const GalleryManager = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "" });
  const [newItem, setNewItem] = useState({ title: "", description: "", file: null });

  useEffect(() => {
    fetchAndSeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAndSeed = async () => {
    try {
      const res = await getGallery();
      if (res.data.length === 0) {
        await seedDefaults();
      } else {
        // patch any items missing description
        const needsPatch = res.data.filter((item) => !item.description);
        for (const item of needsPatch) {
          const match = DEFAULT_ITEMS.find((d) => d.title === item.title);
          if (match) {
            await updateGalleryImage(item._id, { title: item.title, description: match.description });
          }
        }
        const updated = await getGallery();
        setGalleryItems(updated.data);
      }
    } catch (error) {
      console.error("Failed to fetch gallery", error);
    }
  };

  const seedDefaults = async () => {
    try {
      for (const item of DEFAULT_ITEMS) {
        const blob = await fetch(item.localImage).then((r) => r.blob());
        const ext = item.localImage.split(".").pop().split("?")[0];
        const file = new File([blob], `${item.title.replace(/\s/g, "_")}.${ext}`, { type: blob.type });
        const formData = new FormData();
        formData.append("title", item.title);
        formData.append("description", item.description);
        formData.append("image", file);
        await uploadGalleryImage(formData);
      }
      const res = await getGallery();
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Seeding failed", error);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await getGallery();
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Failed to fetch gallery", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newItem.title || !newItem.file) return alert("Title and image are required.");
    const formData = new FormData();
    formData.append("title", newItem.title);
    formData.append("description", newItem.description);
    formData.append("image", newItem.file);
    try {
      await uploadGalleryImage(formData);
      setNewItem({ title: "", description: "", file: null });
      setShowForm(false);
      fetchGallery();
    } catch (error) {
      alert("Upload failed.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await deleteGalleryImage(id);
      fetchGallery();
    } catch (error) {
      alert("Delete failed.");
    }
  };

  const handleEditSave = async (id) => {
    if (!editData.title.trim()) return;
    try {
      await updateGalleryImage(id, editData);
      setEditingItem(null);
      fetchGallery();
    } catch (error) {
      alert("Update failed.");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("natyalaya_token");
    navigate("/login");
  };

  const getImageSrc = (item) => {
    if (item.imagePath) return `https://natyalaya-backend.onrender.com${item.imagePath}`;
    return item.localImage || "";
  };

  return (
    <div className="gallery-page">
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/gallerymanager" className="active">Gallery Manager</Link></li>
          <li className="logout-item">
            <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      <section className="gallery-hero">
        <h1>Gallery Manager</h1>
        <p>Manage academy photos, arangetrams, temple performances and cultural events.</p>
      </section>

      <section className="gallery-stats">
        <div className="gallery-stat-card">
          <FaImages />
          <h2>{galleryItems.length}</h2>
          <p>Total Photos</p>
        </div>
      </section>

      <div className="gallery-btn-section">
        <button className="add-gallery-btn" onClick={() => setShowForm(!showForm)}>
          <FaPlus /> {showForm ? "Cancel" : "Add New Item"}
        </button>
      </div>

      {showForm && (
        <section className="gallery-form-wrapper">
          <div className="gallery-form-header"><h2>Add New Gallery Item</h2></div>
          <form className="gallery-form" onSubmit={handleUpload}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="e.g. Navarathri Celebration 2026"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="3"
                placeholder="Brief details about this photo..."
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewItem({ ...newItem, file: e.target.files[0] })}
              />
            </div>
            <button type="submit" className="publish-btn">Publish Item</button>
          </form>
        </section>
      )}

      <section className="gallery-grid">
        {galleryItems.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px", gridColumn: "1/-1" }}>Loading gallery...</p>
        ) : (
          galleryItems.map((item) => (
            <div className="gallery-card" key={item._id}>
              <img src={getImageSrc(item)} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p className="gallery-desc">{item.description}</p>

                {editingItem === item._id ? (
                  <div className="gallery-edit-form">
                    <input
                      className="gallery-edit-input"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      placeholder="Title"
                    />
                    <textarea
                      className="gallery-edit-input"
                      rows={2}
                      value={editData.description}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      placeholder="Description"
                    />
                    <div className="gallery-actions">
                      <button className="gallery-save-btn" onClick={() => handleEditSave(item._id)}>
                        <FaSave /> Save
                      </button>
                      <button className="gallery-cancel-btn" onClick={() => setEditingItem(null)}>
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="gallery-actions">
                    <button
                      className="gallery-edit-btn"
                      onClick={() => { setEditingItem(item._id); setEditData({ title: item.title, description: item.description || "" }); }}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button className="gallery-delete-btn" onClick={() => handleDelete(item._id)}>
                      <FaTrash /> Delete
                    </button>
                  </div>
                )}
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

export default GalleryManager;
