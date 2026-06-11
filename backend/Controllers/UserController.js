const bcrypt = require("bcryptjs");
const User = require("../Models/UserModel");
const Student = require("../Models/StudentModel");

// In-memory OTP store
const otpStore = {};

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

// STEP 1 — Check email exists and set fixed OTP
const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    let account = await User.findOne({ email });
    if (!account) account = await Student.findOne({ email });
    if (!account) return res.status(404).json({ message: "No account found with this email." });

    const otp = "123456";
    otpStore[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

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
