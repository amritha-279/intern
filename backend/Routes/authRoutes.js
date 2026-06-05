const express = require("express");
const router = express.Router();
const { loginUser, loginAdmin } = require("../Controllers/authController");

router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);

module.exports = router;
