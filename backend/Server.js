require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded images
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
app.use("/uploads", express.static(uploadsDir));

app.get("/", (req, res) => {
  res.send("Natyalaya Backend Running Successfully 🚀");
});

// Routes
app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/user", require("./Routes/UserRoutes"));
app.use("/api/students", require("./Routes/studentRoutes"));
app.use("/api/contact", require("./Routes/contactRoutes"));
app.use("/api/gallery", require("./Routes/galleryRoutes"));
app.use("/api/revenue", require("./Routes/revenueRoutes"));
app.use("/api/statistics", require("./Routes/statisticsRoutes"));
app.use("/api/payment", require("./Routes/paymentRoutes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
