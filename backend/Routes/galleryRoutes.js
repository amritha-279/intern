const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadImage, getGallery, deleteImage, updateImage } = require("../Controllers/galleryController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadImage);
router.get("/", getGallery);
router.delete("/:id", deleteImage);
router.put("/:id", updateImage);

module.exports = router;
