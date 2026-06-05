import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import { registerStudent, createRazorpayOrder } from "../services/api";
import Navbar from "../components/Navbar";

function Register() {
  const feeMap = {
    "Beginner Batch": "₹1500/month",
    "Intermediate Batch": "₹2000/month",
    "Advanced Batch": "₹2500/month",
    "Junior Batch (Kids)": "₹1200/month",
    "Arangetram Preparation": "₹5000/month",
    "Weekend Workshop": "₹1000/workshop",
  };

  const feeAmountMap = {
    "Beginner Batch": 1500,
    "Intermediate Batch": 2000,
    "Advanced Batch": 2500,
    "Junior Batch (Kids)": 1200,
    "Arangetram Preparation": 5000,
    "Weekend Workshop": 1000,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    email: "",
    phone: "",
    batch: "",
    experience: "",
    startDate: "",
    amount: "",
    payment: "",
    parentName: "",
    parentPhone: "",
    yearsTraining: "",
    currentGuru: "",
    perfExperience: "",
    workshopType: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "batch") {
      setFormData({ ...formData, batch: value, amount: feeMap[value] || "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const nameReg = /^[A-Za-z\s]{3,}$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^[6-9]\d{9}$/;
    if (!nameReg.test(formData.firstName)) { alert("First name must be at least 3 characters."); return false; }
    if (!nameReg.test(formData.lastName))  { alert("Last name must be at least 3 characters."); return false; }
    if (!formData.age || formData.age < 5 || formData.age > 60) { alert("Age must be between 5 and 60."); return false; }
    if (!emailReg.test(formData.email))    { alert("Enter a valid email."); return false; }
    if (!phoneReg.test(formData.phone))    { alert("Enter a valid phone number."); return false; }
    if (!formData.batch)                   { alert("Please select a batch."); return false; }
    if (!formData.payment)                 { alert("Please select a payment mode."); return false; }
    return true;
  };

  const registerUser = async () => {
    if (!validate()) return;

    if (formData.payment === "Online Payment") {
      try {
        const amountInPaise = feeAmountMap[formData.batch] * 100;
        const orderRes = await createRazorpayOrder(amountInPaise);
        const { orderId, amount, currency } = orderRes.data;

        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount,
          currency,
          name: "Natyalaya",
          description: `${formData.batch} Registration Fee`,
          order_id: orderId,
          handler: async (response) => {
            await registerStudent({ ...formData, paymentId: response.razorpay_payment_id });
            setShowModal(true);
          },
          prefill: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            contact: formData.phone,
          },
          theme: { color: "#7F2020" },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", () => alert("Payment failed. Please try again."));
        rzp.open();
      } catch (error) {
        alert(error.response?.data?.message || "Payment initiation failed.");
      }
    } else {
      try {
        await registerStudent(formData);
        setShowModal(true);
      } catch (error) {
        alert(error.response?.data?.message || "Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />

      <section className="register-section">
        <div className="register-card">

          <h1>Register</h1>
          <p className="sub">Join Natyalaya and begin your dance journey</p>

          <div className="section-divider">Personal Information</div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="section-divider">Class Preferences</div>

          <div className="form-group">
            <label>Preferred Batch</label>
            <select name="batch" value={formData.batch} onChange={handleChange}>
              <option value="">Select a batch</option>
              <optgroup label="Regular Batches">
                <option value="Beginner Batch">Beginner Batch</option>
                <option value="Intermediate Batch">Intermediate Batch</option>
                <option value="Advanced Batch">Advanced Batch</option>
              </optgroup>
              <optgroup label="Special Programs">
                <option value="Junior Batch (Kids)">Junior Batch (Kids)</option>
                <option value="Arangetram Preparation">Arangetram Preparation</option>
                <option value="Weekend Workshop">Weekend Workshop</option>
              </optgroup>
            </select>

            <div className="fee-card">
              <div className="fee-item"><span className="fee-label">Beginner</span><span className="fee-amount">₹1500/mo</span></div>
              <div className="fee-item"><span className="fee-label">Intermediate</span><span className="fee-amount">₹2000/mo</span></div>
              <div className="fee-item"><span className="fee-label">Advanced</span><span className="fee-amount">₹2500/mo</span></div>
              <div className="fee-item"><span className="fee-label">Junior</span><span className="fee-amount">₹1200/mo</span></div>
              <div className="fee-item"><span className="fee-label">Arangetram</span><span className="fee-amount">₹5000/mo</span></div>
              <div className="fee-item"><span className="fee-label">Workshop</span><span className="fee-amount">₹1000/wk</span></div>
            </div>
          </div>

          <div className="form-group">
            <label>Experience Level</label>
            <select name="experience" value={formData.experience} onChange={handleChange}>
              <option value="">Select Experience Level</option>
              <option>Absolute Beginner</option>
              <option>Basic Training</option>
              <option>Intermediate Dancer</option>
              <option>Advanced Performer</option>
              <option>Arangetram Candidate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Start Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input type="text" name="amount" value={formData.amount} readOnly />
          </div>

          <div className="form-group">
            <label>Payment Mode</label>
            <select name="payment" value={formData.payment} onChange={handleChange}>
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Online Payment">Online Payment</option>
            </select>
          </div>

          {/* JUNIOR FIELDS */}
          {formData.batch === "Junior Batch (Kids)" && (
            <>
              <div className="section-divider">Parent / Guardian Details</div>
              <div className="form-group">
                <label>Parent / Guardian Name</label>
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Parent Contact Number</label>
                <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} />
              </div>
            </>
          )}

          {/* ARANGETRAM */}
          {formData.batch === "Arangetram Preparation" && (
            <>
              <div className="section-divider">Arangetram Details</div>
              <div className="form-group">
                <label>Years of Training</label>
                <input type="number" name="yearsTraining" value={formData.yearsTraining} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Current Guru / Institution</label>
                <input type="text" name="currentGuru" value={formData.currentGuru} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Previous Performance Experience</label>
                <input type="text" name="perfExperience" value={formData.perfExperience} onChange={handleChange} />
              </div>
            </>
          )}

          {/* WORKSHOP */}
          {formData.batch === "Weekend Workshop" && (
            <>
              <div className="section-divider">Workshop Preference</div>
              <div className="form-group">
                <label>Workshop Interested In</label>
                <select name="workshopType" value={formData.workshopType} onChange={handleChange}>
                  <option value="">Select Workshop</option>
                  <option>Rhythm & Tala Workshop</option>
                  <option>Abhinaya Workshop</option>
                  <option>Folk & Fusion Workshop</option>
                </select>
              </div>
            </>
          )}

          <button className="submit-btn" onClick={registerUser}>
            Register Now
          </button>

        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay show">
          <div className="modal">
            <div className="modal-icon">🪔</div>
            <h2>Registration Submitted Successfully</h2>
            <p>Welcome to Natya Kala Dance Academy. Your sacred dance journey begins here.</p>
            <div className="modal-btns">
              <Link to="/classes" className="modal-btn secondary">View Schedules</Link>
              <Link to="/home" className="modal-btn primary">Go Home</Link>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through tradition, discipline, and excellence.</p>
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
            <h3>Contact</h3>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Natyalaya | Preserving Tradition Through Technology
        </div>
      </section>
    </>
  );
}

export default Register;
