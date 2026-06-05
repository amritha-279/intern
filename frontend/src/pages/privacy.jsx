import React from "react";
import { Link } from "react-router-dom";
import "../css/privacy.css";

function Privacy() {
  return (
    <>
      <section className="page-hero">
        <h1>Privacy Policy</h1>

        <p>
          Your privacy is important to us. Learn how we collect,
          use and protect your information.
        </p>
      </section>

      <div className="content-section">

        <p className="last-updated">
          Last Updated: January 2026
        </p>

        <div className="terms-card">
          <h2>
            <span>1</span>
            Introduction
          </h2>

          <p>
            Natyalaya Dance Academy is committed to protecting
            the personal information of students, parents,
            and website visitors.
          </p>

          <p>
            By registering with Natyalaya or using our
            website, you consent to the practices described
            in this policy.
          </p>

          <div className="highlight-box">
            <p>
              🔒 We do not sell, rent, or trade your personal
              information to any third party.
            </p>
          </div>
        </div>

        <div className="terms-card">
          <h2>
            <span>2</span>
            Information We Collect
          </h2>

          <ul>
            <li>Full name, age and date of birth</li>
            <li>Email address and phone number</li>
            <li>Parent or guardian details</li>
            <li>Dance experience and batch preferences</li>
            <li>Payment information</li>
            <li>Attendance and performance records</li>
            <li>Photographs and videos</li>
            <li>Device and browser information</li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>3</span>
            How We Use Your Information
          </h2>

          <ul>
            <li>Managing student registrations</li>
            <li>Communicating schedules and updates</li>
            <li>Tracking attendance and progress</li>
            <li>Processing fee payments</li>
            <li>Organizing events and workshops</li>
            <li>Sending notifications</li>
            <li>Improving our website and services</li>
            <li>Meeting legal obligations</li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>4</span>
            Data Storage & Security
          </h2>

          <ul>
            <li>
              Data is stored securely using modern practices.
            </li>

            <li>
              Access is restricted to authorized staff.
            </li>

            <li>
              localStorage and sessionStorage are used for
              session management.
            </li>

            <li>
              Passwords are encrypted before storage.
            </li>

            <li>
              Security practices are regularly reviewed.
            </li>

            <li>
              Users are notified in case of a breach.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>5</span>
            Cookies & Local Storage
          </h2>

          <ul>
            <li>
              Session data helps keep users logged in.
            </li>

            <li>
              Registration data may be stored locally.
            </li>

            <li>
              No third-party tracking tools are used
              without consent.
            </li>

            <li>
              Users may clear browser storage anytime.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>6</span>
            Photography & Media
          </h2>

          <ul>
            <li>
              Photos and videos may be used for
              promotional purposes.
            </li>

            <li>
              Students may opt out through written notice.
            </li>

            <li>
              Images of minors require parental consent.
            </li>

            <li>
              Students may request image removal.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>7</span>
            Sharing of Information
          </h2>

          <p>
            Personal information is only shared when
            legally required or necessary for academy
            operations.
          </p>

          <ul>
            <li>When required by law</li>
            <li>With payment processors</li>
            <li>With event organizers</li>
            <li>For emergency situations</li>
          </ul>

          <div className="highlight-box">
            <p>
              ✦ We never share your data for marketing,
              advertising or commercial purposes.
            </p>
          </div>
        </div>

        <div className="terms-card">
          <h2>
            <span>8</span>
            Children's Privacy
          </h2>

          <ul>
            <li>
              Extra care is taken for students under 18.
            </li>

            <li>
              Parent consent is required for minors.
            </li>

            <li>
              Parents may request access or deletion.
            </li>

            <li>
              We do not knowingly collect data from
              children under 5.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>9</span>
            Your Rights
          </h2>

          <ul>
            <li>
              <strong>Access:</strong> Request your data.
            </li>

            <li>
              <strong>Correction:</strong> Correct
              inaccurate information.
            </li>

            <li>
              <strong>Deletion:</strong> Request data
              removal.
            </li>

            <li>
              <strong>Objection:</strong> Restrict
              specific uses.
            </li>

            <li>
              <strong>Portability:</strong> Request a
              portable copy.
            </li>
          </ul>

          <p>
            Contact us at
            <strong> info@natyalaya.com </strong>
            to exercise these rights.
          </p>
        </div>

        <div className="terms-card">
          <h2>
            <span>10</span>
            Changes to This Policy
          </h2>

          <p>
            This Privacy Policy may be updated from
            time to time. Continued use of our services
            indicates acceptance of revisions.
          </p>
        </div>

        <div className="terms-card">
          <h2>
            <span>11</span>
            Contact Us
          </h2>

          <ul>
            <li>
              📍 Natyalaya Dance Academy, Chennai,
              Tamil Nadu
            </li>

            <li>
              📞 +91 98765 43210
            </li>

            <li>
              ✉ info@natyalaya.com
            </li>
          </ul>
        </div>

        <div className="btn-center">
          <Link
            to="/signup"
            className="back-btn"
          >
            ← Back to Sign Up
          </Link>
        </div>

      </div>


    </>
  );
}

export default Privacy;