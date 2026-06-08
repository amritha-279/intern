const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../Models/StudentModel");
const User = require("../Models/UserModel");

// USER LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check User collection first, then Student collection
    let account = await User.findOne({ email });
    if (!account) account = await Student.findOne({ email });
    if (!account) return res.status(404).json({ message: "No account found. Please register first." });

    const isMatch =
      account.password.startsWith("$2") 
        ? await bcrypt.compare(password, account.password)
        : password === account.password;
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    // if password was plain text, re-save it hashed
    if (!account.password.startsWith("$2")) {
      account.password = await bcrypt.hash(password, 10);
      await account.save();
    }

    const token = jwt.sign(
      { id: account._id, email: account.email, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: `Welcome back, ${account.firstName}!`,
      token,
      user: { firstName: account.firstName, email: account.email, role: "user" }
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed.", error: error.message });
  }
};

// ADMIN LOGIN
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email, role: "admin" });
    if (!admin) return res.status(401).json({ message: "Invalid admin credentials." });

    const isMatch = admin.password.startsWith("$2")
      ? await bcrypt.compare(password, admin.password)
      : password === admin.password;
    if (!isMatch) return res.status(401).json({ message: "Invalid admin credentials." });

    const token = jwt.sign(
      { email: admin.email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Welcome, Admin!",
      token,
      user: { email: admin.email, role: "admin" }
    });
  } catch (error) {
    res.status(500).json({ message: "Admin login failed.", error: error.message });
  }
};

module.exports = { loginUser, loginAdmin };
