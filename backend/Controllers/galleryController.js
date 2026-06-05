const Gallery = require("../Models/GalleryModel");
const fs = require("fs");
const path = require("path");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded." });
    const { title, description } = req.body;
    const gallery = new Gallery({
      title,
      description,
      imagePath: `/uploads/${req.file.filename}`,
    });
    const saved = await gallery.save();
    res.status(201).json({ message: "Image uploaded successfully!", data: saved });
  } catch (error) {
    res.status(500).json({ message: "Upload failed.", error: error.message });
  }
};

const getGallery = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gallery.", error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found." });
    const filePath = path.join(__dirname, "..", item.imagePath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Image deleted." });
  } catch (error) {
    res.status(500).json({ message: "Delete failed.", error: error.message });
  }
};

const updateImage = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.status(200).json({ message: "Updated.", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed.", error: error.message });
  }
};

module.exports = { uploadImage, getGallery, deleteImage, updateImage };
