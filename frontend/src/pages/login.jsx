import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { loginUser as loginUserAPI, loginAdmin as loginAdminAPI } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotStep, setForgotStep] = useState(0); // 0=closed, 1=email, 2=new password
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotError, setForgotError] = useState("");

const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForgotEmailSubmit = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(forgotEmail)) {
      setForgotError("Enter a valid email address.");
      return;
    }
    const stored = JSON.parse(localStorage.getItem("natyalaya_user"));
    if (!stored || stored.email !== forgotEmail) {
      setForgotError("No account found with this email.");
      return;
    }
    setForgotError("");
    setForgotStep(2);
  };

  const handleResetPassword = () => {
    const passReg = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passReg.test(newPassword)) {
      setForgotError("Password must be at least 6 characters with letters and numbers.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setForgotError("Passwords do not match.");
      return;
    }
    const stored = JSON.parse(localStorage.getItem("natyalaya_user"));
    localStorage.setItem("natyalaya_user", JSON.stringify({ ...stored, password: newPassword }));
    setForgotStep(0);
    setForgotEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setForgotError("");
    alert("Password reset successfully! Please log in.");
  };

  const closeForgot = () => {
    setForgotStep(0);
    setForgotEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setForgotError("");
  };

  const loginUser = async () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, password } = formData;

    if (!emailReg.test(email)) return alert("Enter a valid email address.");
    if (!password) return alert("Please enter your password.");

    try {
      if (role === "admin") {
        const res = await loginAdminAPI({ email, password });
        sessionStorage.setItem("natyalaya_token", res.data.token);
        sessionStorage.setItem("natyalaya_session", JSON.stringify({ email, loggedIn: true, role: "admin" }));
        alert(res.data.message);
        navigate("/admin");
      } else {
        const res = await loginUserAPI({ email, password });
        localStorage.setItem("natyalaya_token", res.data.token);
        localStorage.setItem("natyalaya_user", JSON.stringify(res.data.user));
        sessionStorage.setItem("natyalaya_session", JSON.stringify({ email, loggedIn: true, role: "user" }));
        alert(res.data.message);
        navigate("/home");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-card">

          <h1>Welcome Back</h1>

          <p className="sub">
            {role === "admin"
              ? "Login as Administrator"
              : "Login to your Natyalaya account"}
          </p>

          <div className="role-toggle">

            <button
              className={
                role === "user"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("user")
              }
            >
              User Login
            </button>

            <button
              className={
                role === "admin"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("admin")
              }
            >
              Admin Login
            </button>

          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="forgot">
            <button className="forgot-btn" onClick={() => { setForgotStep(1); setForgotError(""); }}>
              Forgot Password?
            </button>
          </div>

          {forgotStep > 0 && (
            <div className="forgot-modal-overlay">
              <div className="forgot-modal">
                <button className="forgot-modal-close" onClick={closeForgot}>✕</button>

                {forgotStep === 1 && (
                  <>
                    <h3>Forgot Password</h3>
                    <p>Enter your registered email address.</p>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Your registered email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                      />
                    </div>
                    {forgotError && <p className="forgot-error">{forgotError}</p>}
                    <button className="submit-btn" onClick={handleForgotEmailSubmit}>Continue</button>
                  </>
                )}

                {forgotStep === 2 && (
                  <>
                    <h3>Reset Password</h3>
                    <p>Set a new password for <strong>{forgotEmail}</strong></p>
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    {forgotError && <p className="forgot-error">{forgotError}</p>}
                    <button className="submit-btn" onClick={handleResetPassword}>Reset Password</button>
                  </>
                )}
              </div>
            </div>
          )}

          <button
            className="submit-btn"
            onClick={loginUser}
          >
            Login
          </button>

          {role === "user" && (
            <p className="signup-link">
              Don't have an account?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </p>
          )}

        </div>
      </section>
    </>
  );
}

export default Login;