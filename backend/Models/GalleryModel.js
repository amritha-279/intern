const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, default: "" },
  imagePath:   { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Gallery", GallerySchema);
