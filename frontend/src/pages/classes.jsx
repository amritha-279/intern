import React from "react";
import { Link } from "react-router-dom";
import "../css/classes.css";

function Classes() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={require("../images/logo.png")}
            alt="Natyalaya Logo"
          />
          Natya<span>laya</span>
        </div>

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/guru">Guru</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/classes">Class Schedules</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li>
            <Link to="/login" className="logout-btn">
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* PAGE HERO */}

      <section className="page-hero">
        <h1>Class Timetables</h1>

        <p>
          Explore our dance classes offered across different
          timings and experience levels. Click the register
          button to join a class!
        </p>
      </section>

      {/* MORNING BATCHES */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🌅 Morning</span>

          <h2>Morning Batches</h2>

          <div className="batch-line"></div>

          <span className="batch-time">
            6:30 AM – 11:00 AM
          </span>
        </div>

        <div className="schedule-grid">

          {/* Beginner */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Beginner – Morning</h3>

              <span className="level-badge beginner">
                Beginner
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 06:30 – 07:45</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>6:30 – 6:45</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>6:45 – 7:05</td>
                  <td>Adavus (Basic)</td>
                </tr>

                <tr>
                  <td>7:05 – 7:25</td>
                  <td>Rhythm (Tala)</td>
                </tr>

                <tr>
                  <td>7:25 – 7:45</td>
                  <td>Stretching</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Intermediate */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Intermediate – Morning</h3>

              <span className="level-badge intermediate">
                Intermediate
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 07:45 – 09:15</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>7:45 – 8:00</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>8:00 – 8:30</td>
                  <td>Adavus (Speed)</td>
                </tr>

                <tr>
                  <td>8:30 – 9:00</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>9:00 – 9:15</td>
                  <td>Cool Down</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Advanced */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Advanced – Morning</h3>

              <span className="level-badge advanced">
                Advanced
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 09:30 – 11:00</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>9:30 – 9:45</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>9:45 – 10:15</td>
                  <td>Varnam</td>
                </tr>

                <tr>
                  <td>10:15 – 10:45</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>10:45 – 11:00</td>
                  <td>Stretching</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* EVENING BATCHES */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🌆 Evening</span>

          <h2>Evening Batches</h2>

          <div className="batch-line"></div>

          <span className="batch-time">
            5:00 PM – 9:30 PM
          </span>
        </div>

        <div className="schedule-grid">

          <div className="schedule-card">
            <div className="card-header">
              <h3>Beginner – Evening</h3>

              <span className="level-badge beginner">
                Beginner
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 17:00 – 18:15</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>5:00 – 5:15</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>5:15 – 5:40</td>
                  <td>Adavus</td>
                </tr>

                <tr>
                  <td>5:40 – 6:00</td>
                  <td>Rhythm</td>
                </tr>

                <tr>
                  <td>6:00 – 6:15</td>
                  <td>Games</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Intermediate Evening */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Intermediate – Evening</h3>

              <span className="level-badge intermediate">
                Intermediate
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 18:30 – 19:45</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>6:30 – 6:45</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>6:45 – 7:15</td>
                  <td>Jatis</td>
                </tr>

                <tr>
                  <td>7:15 – 7:35</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>7:35 – 7:45</td>
                  <td>Cool Down</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Advanced Evening */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Advanced – Evening</h3>

              <span className="level-badge advanced">
                Advanced
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 20:00 – 21:30</span>
              <span>📅 Mon – Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>8:00 – 8:15</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>8:15 – 8:50</td>
                  <td>Varnam</td>
                </tr>

                <tr>
                  <td>8:50 – 9:15</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>9:15 – 9:30</td>
                  <td>Stretch</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* WEEKEND BATCHES */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🌿 Weekend</span>

          <h2>Weekend Batches</h2>

          <div className="batch-line"></div>

          <span className="batch-time">
            8:00 AM – 6:00 PM
          </span>
        </div>

        <div className="schedule-grid">

          {/* Weekend Beginner */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Beginner – Weekend</h3>

              <span className="level-badge beginner">
                Beginner
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 08:00 – 09:30</span>
              <span>📅 Sat & Sun</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>8:00 – 8:15</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>8:15 – 8:45</td>
                  <td>Adavus</td>
                </tr>

                <tr>
                  <td>8:45 – 9:15</td>
                  <td>Rhythm</td>
                </tr>

                <tr>
                  <td>9:15 – 9:30</td>
                  <td>Stretch</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Weekend Intermediate */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Intermediate – Weekend</h3>

              <span className="level-badge intermediate">
                Intermediate
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 10:00 – 11:30</span>
              <span>📅 Sat & Sun</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>10:00 – 10:15</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>10:15 – 10:45</td>
                  <td>Jatis</td>
                </tr>

                <tr>
                  <td>10:45 – 11:15</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>11:15 – 11:30</td>
                  <td>Stretch</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Weekend Advanced */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Advanced – Weekend</h3>

              <span className="level-badge advanced">
                Advanced
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 16:00 – 18:00</span>
              <span>📅 Sat & Sun</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>4:00 – 4:15</td>
                  <td>Warm-up</td>
                </tr>

                <tr>
                  <td>4:15 – 5:00</td>
                  <td>Varnam</td>
                </tr>

                <tr>
                  <td>5:00 – 5:40</td>
                  <td>Abhinaya</td>
                </tr>

                <tr>
                  <td>5:40 – 6:00</td>
                  <td>Stretch</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* JUNIOR BATCHES */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🧒 Junior</span>

          <h2>Junior Batches</h2>

          <div className="batch-line"></div>

          <span className="batch-time">
            4:00 PM – 5:30 PM
          </span>
        </div>

        <div className="schedule-grid">

          {/* Junior Beginner */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Junior Beginners</h3>

              <span className="level-badge beginner">
                5–8 Years
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 04:00 – 04:45</span>
              <span>📅 Mon, Wed, Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>4:00 – 4:10</td>
                  <td>Warm-up Games</td>
                </tr>

                <tr>
                  <td>4:10 – 4:25</td>
                  <td>Basic Adavus</td>
                </tr>

                <tr>
                  <td>4:25 – 4:35</td>
                  <td>Rhythm Practice</td>
                </tr>

                <tr>
                  <td>4:35 – 4:45</td>
                  <td>Fun Activities</td>
                </tr>
              </tbody>
            </table>
          </div>
              {/* Junior Intermediate */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Junior Intermediate</h3>

              <span className="level-badge intermediate">
                8–12 Years
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 04:45 – 05:15</span>
              <span>📅 Mon, Wed, Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>4:45 – 5:00</td>
                  <td>Adavus Practice</td>
                </tr>

                <tr>
                  <td>5:00 – 5:10</td>
                  <td>Hand Gestures (Mudras)</td>
                </tr>

                <tr>
                  <td>5:10 – 5:15</td>
                  <td>Stretching</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Junior Advanced */}

          <div className="schedule-card">
            <div className="card-header">
              <h3>Junior Advanced</h3>

              <span className="level-badge advanced">
                10–14 Years
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 05:15 – 05:30</span>
              <span>📅 Mon, Wed, Fri</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>5:15 – 5:20</td>
                  <td>Rhythm Exercises</td>
                </tr>

                <tr>
                  <td>5:20 – 5:25</td>
                  <td>Expression Practice</td>
                </tr>

                <tr>
                  <td>5:25 – 5:30</td>
                  <td>Cool Down</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ARANGETRAM PREPARATION */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🏆 Special</span>

          <h2>Arangetram Preparation</h2>

          <div className="batch-line"></div>

          <span className="batch-time">
            6:00 PM – 8:00 PM
          </span>
        </div>

        <div className="schedule-grid">

          <div className="schedule-card">

            <div className="card-header">
              <h3>Arangetram Training Batch</h3>

              <span className="level-badge advanced">
                Special
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 06:00 – 08:00 PM</span>
              <span>📅 Tue, Thu, Sat</span>
            </div>

            <table className="timetable">
              <tbody>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>

                <tr>
                  <td>6:00 – 6:20</td>
                  <td>Warm-up & Conditioning</td>
                </tr>

                <tr>
                  <td>6:20 – 7:00</td>
                  <td>Varnam Practice</td>
                </tr>

                <tr>
                  <td>7:00 – 7:30</td>
                  <td>Abhinaya Training</td>
                </tr>

                <tr>
                  <td>7:30 – 8:00</td>
                  <td>Performance Rehearsal</td>
                </tr>
              </tbody>
            </table>

            <ul className="features-list">
              <li>One-to-one mentoring</li>
              <li>Stage performance training</li>
              <li>Costume and makeup guidance</li>
              <li>Mock stage rehearsals</li>
              <li>Music synchronization practice</li>
            </ul>

          </div>

        </div>
      </section>

      {/* WEEKEND WORKSHOPS */}

      <section className="batch-section">
        <div className="batch-heading">
          <span className="batch-tag">🎭 Workshops</span>

          <h2>Weekend Workshops</h2>

          <div className="batch-line"></div>
        </div>

        <div className="schedule-grid">

          <div className="schedule-card">
            <div className="card-header">
              <h3>Rhythm & Tala Workshop</h3>

              <span className="level-badge intermediate">
                Saturday
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 10:00 AM – 12:00 PM</span>
            </div>
          </div>

          <div className="schedule-card">
            <div className="card-header">
              <h3>Abhinaya Workshop</h3>

              <span className="level-badge intermediate">
                Saturday
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 02:00 PM – 04:00 PM</span>
            </div>
          </div>

          <div className="schedule-card">
            <div className="card-header">
              <h3>Folk & Fusion Workshop</h3>

              <span className="level-badge beginner">
                Sunday
              </span>
            </div>

            <div className="card-meta">
              <span>⏰ 10:00 AM – 01:00 PM</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="cta-card">

          <h2>Ready to join our dance academy?</h2>

          <p>
            Take the first step towards mastering the sacred
            art of Bharatanatyam. Choose your batch and begin
            your journey today.
          </p>

          <Link
            to="/register"
            className="register-btn"
          >
            Register Now
          </Link>

        </div>
      </section>

      {/* FOOTER */}

      <section className="footer-section">

        <div className="footer-container">

          <div className="footer-box">
            <h3>About Natyalaya</h3>

            <p>
              Preserving the sacred art of Bharatanatyam
              through tradition, discipline and excellence.
            </p>
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

export default Classes;