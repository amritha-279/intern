import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import { signupUser as signupUserAPI } from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const signupUser = async () => {
    const nameReg = /^[A-Za-z\s]{2,}$/;
    const emailReg =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passReg =
      /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (
      !nameReg.test(formData.firstName)
    ) {
      return alert(
        "Enter a valid full name."
      );
    }

    if (
      !emailReg.test(formData.email)
    ) {
      return alert(
        "Enter a valid email address."
      );
    }

    if (
      !passReg.test(formData.password)
    ) {
      return alert(
        "Password must contain letters and numbers and be at least 6 characters."
      );
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return alert(
        "Passwords do not match."
      );
    }

    if (!formData.terms) {
      return alert(
        "Please accept the Terms & Conditions."
      );
    }

    if (!formData.privacy) {
      return alert(
        "Please accept the Privacy Policy."
      );
    }

    try {
      await signupUserAPI({
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
      });
      alert(`Account created! Welcome, ${formData.firstName}.`);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <>
      <section className="signup-section">

        <div className="signup-card">

          <h1>Create Account</h1>

          <p className="sub">
            Sign up to explore Natyalaya
          </p>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="firstName"
              placeholder="Your full name"
              value={formData.firstName}
              onChange={handleChange}
            />
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={
                formData.confirmPassword
              }
              onChange={handleChange}
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>
                I agree to the{" "}
                <Link to="/terms">
                  Terms & Conditions
                </Link>
              </span>

            </label>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">

              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
              />

              <span>
                I have read and accept the{" "}
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </span>

            </label>
          </div>

          <button
            className="submit-btn"
            onClick={signupUser}
          >
            Create Account
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </section>
    </>
  );
}

export default Signup;