import React from "react";
import { Link } from "react-router-dom";
import "../css/terms.css";

function Terms() {
  return (
    <>
      <section className="page-hero">
        <h1>Terms & Conditions</h1>

        <p>
          Please read these terms carefully before
          enrolling at Natyalaya
        </p>
      </section>

      <div className="content-section">

        <p className="last-updated">
          Last Updated: January 2026
        </p>

        <div className="terms-card">
          <h2>
            <span>1</span>
            Acceptance of Terms
          </h2>

          <p>
            By registering with Natyalaya Dance
            Academy, you agree to be bound by
            these Terms and Conditions.
          </p>

          <p>
            Natyalaya reserves the right to
            update or modify these terms at any
            time.
          </p>
        </div>

        <div className="terms-card">
          <h2>
            <span>2</span>
            Enrollment & Registration
          </h2>

          <ul>
            <li>
              Registration is confirmed only
              upon receipt of the first month's
              fee payment.
            </li>

            <li>
              Students must provide accurate
              personal information during
              registration.
            </li>

            <li>
              Natyalaya reserves the right to
              reject any application.
            </li>

            <li>
              Each student is allowed to enroll
              in one batch at a time.
            </li>

            <li>
              Age eligibility must be met for
              Junior Batches and Arangetram
              programs.
            </li>

            <li>
              Re-enrollment after a break is
              subject to batch availability.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>3</span>
            Fees & Payments
          </h2>

          <ul>
            <li>
              Monthly fees are due on or before
              the 5th of every month.
            </li>

            <li>
              A late fee of ₹100 will be charged
              after the 10th.
            </li>

            <li>
              Fees once paid are non-refundable.
            </li>

            <li>
              Fee structure may change at the
              beginning of each academic year.
            </li>

            <li>
              Students with outstanding dues may
              be suspended.
            </li>

            <li>
              Workshop fees must be paid in
              advance.
            </li>

            <li>
              Arangetram fees are charged
              separately.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>4</span>
            Attendance & Conduct
          </h2>

          <ul>
            <li>
              Minimum attendance of 75% is
              required.
            </li>

            <li>
              Planned absences must be informed
              in advance.
            </li>

            <li>
              Repeated unexcused absences may
              result in removal.
            </li>

            <li>
              Respectful conduct towards Gurus
              and fellow students is mandatory.
            </li>

            <li>
              Mobile phone use during class is
              not permitted.
            </li>

            <li>
              Students must arrive on time.
            </li>

            <li>
              Proper dance attire must be worn.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>5</span>
            Performance & Events
          </h2>

          <ul>
            <li>
              Participation is at the Guru's
              discretion.
            </li>

            <li>
              Costume and makeup expenses are
              borne by students.
            </li>

            <li>
              Arangetram requires minimum
              training experience.
            </li>

            <li>
              Photos and videos may be used for
              promotional purposes.
            </li>

            <li>
              Mandatory rehearsals must be
              attended.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>6</span>
            Health & Safety
          </h2>

          <ul>
            <li>
              Medical conditions must be
              disclosed.
            </li>

            <li>
              Natyalaya is not liable for
              negligence-related injuries.
            </li>

            <li>
              Students should not attend while
              unwell.
            </li>

            <li>
              The academy maintains a safe and
              hygienic environment.
            </li>

            <li>
              Emergency contacts must be
              provided.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>7</span>
            Intellectual Property
          </h2>

          <ul>
            <li>
              Choreography and academy content
              belong to Natyalaya.
            </li>

            <li>
              Sharing academy choreography is
              prohibited without permission.
            </li>

            <li>
              Recording classes requires Guru
              approval.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>8</span>
            Termination & Withdrawal
          </h2>

          <ul>
            <li>
              One month's notice is required for
              withdrawal.
            </li>

            <li>
              Enrollment may be terminated for
              violations.
            </li>

            <li>
              No refund is provided for
              misconduct-related termination.
            </li>

            <li>
              Long leave students must
              re-register.
            </li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>
            <span>9</span>
            Governing Law
          </h2>

          <p>
            These Terms and Conditions are
            governed by the laws of India.
          </p>

          <p>
            For queries contact:
            <strong>
              {" "}
              info@natyalaya.com
            </strong>
          </p>
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

export default Terms;