const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./Models/UserModel");

async function seed() {
  await mongoose.connect(process.env.MONGO_URL);

  const existing = await User.findOne({ email: "suryasekar626@gmail.com" });
  if (existing) {
    console.log("User already exists.");
    process.exit(0);
  }

  const hashed = await bcrypt.hash("surya@123", 10);
  await User.create({
    firstName: "Surya",
    lastName: "Sekar",
    email: "suryasekar626@gmail.com",
    password: hashed,
    role: "user",
  });

  console.log("User created successfully.");
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
