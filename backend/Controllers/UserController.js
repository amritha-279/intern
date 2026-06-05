const bcrypt = require("bcryptjs");
const User = require("../Models/UserModel");

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

module.exports = { signupuser };
