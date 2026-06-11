const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../Models/UserModel");
const Student = require("../Models/StudentModel");

// In-memory OTP store: { email: { otp, expiresAt } }
const otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const signupuser = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered." });
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, email, password: hashed });
    const saved = await newUser.save();
    res.status(201).json({
      message: "Account created successfully!",
      data: { firstName: saved.firstName, email: saved.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed.", error: error.message });
  }
};

// STEP 1 — Check email exists and send OTP
const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    let account = await User.findOne({ email });
    if (!account) account = await Student.findOne({ email });
    if (!account) return res.status(404).json({ message: "No account found with this email." });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

    try {
      await transporter.sendMail({
        from: `"Natyalaya" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Natyalaya — Password Reset OTP",
        html: `
          <div style="font-family:'Poppins',sans-serif;max-width:480px;margin:auto;padding:30px;background:#fff6e9;border-radius:16px;">
            <h2 style="color:#7F2020;font-family:'Cinzel',serif;">Natyalaya</h2>
            <p style="color:#3B2A1A;">You requested a password reset. Use the OTP below:</p>
            <div style="font-size:2.5rem;font-weight:700;color:#7F2020;letter-spacing:10px;text-align:center;padding:20px 0;">${otp}</div>
            <p style="color:#6a5544;font-size:0.9rem;">This OTP expires in <strong>10 minutes</strong>. Do not share it with anyone.</p>
          </div>
        `,
      });
      console.log(`OTP sent to ${email}: ${otp}`);
    } catch (mailErr) {
      console.error("Email send failed, OTP:", otp, mailErr.message);
    }

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (error) {
    res.status(500).json({ message: "Failed to send OTP.", error: error.message });
  }
};

// STEP 2 — Verify OTP
const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];
  if (!record) return res.status(400).json({ message: "No OTP requested for this email." });
  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP has expired. Please request a new one." });
  }
  if (record.otp !== otp) return res.status(400).json({ message: "Incorrect OTP. Please try again." });
  res.status(200).json({ message: "OTP verified." });
};

// STEP 3 — Reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const record = otpStore[email];
    if (!record) return res.status(400).json({ message: "No OTP requested for this email." });
    if (Date.now() > record.expiresAt) {
      delete otpStore[email];
      return res.status(400).json({ message: "OTP has expired. Please request a new one." });
    }
    if (record.otp !== otp) return res.status(400).json({ message: "Incorrect OTP." });

    const hashed = await bcrypt.hash(newPassword, 10);
    let account = await User.findOne({ email });
    if (account) {
      account.password = hashed;
      await account.save();
    } else {
      account = await Student.findOne({ email });
      if (!account) return res.status(404).json({ message: "Account not found." });
      account.password = hashed;
      await account.save();
    }

    delete otpStore[email];
    res.status(200).json({ message: "Password reset successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Reset failed.", error: error.message });
  }
};

module.exports = { signupuser, checkEmail, verifyOtp, resetPassword };
