const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./Models/UserModel");

async function seedAdmin() {
  await mongoose.connect(process.env.MONGO_URL);

  const admins = [
    { firstName: "Admin", lastName: "Natyalaya", email: "admin@gmail.com", password: "admin1234" },
    { firstName: "Surya", lastName: "Sekar", email: "suryasekar626@gmail.com", password: "surya@123" },
  ];

  for (const admin of admins) {
    const existing = await User.findOne({ email: admin.email });
    if (existing) {
      console.log(`Admin ${admin.email} already exists.`);
      continue;
    }
    const hashed = await bcrypt.hash(admin.password, 10);
    await User.create({
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      password: hashed,
      role: "admin",
    });
    console.log(`Admin ${admin.email} created successfully.`);
  }

  process.exit(0);
}

seedAdmin().catch((err) => { console.error(err); process.exit(1); });
