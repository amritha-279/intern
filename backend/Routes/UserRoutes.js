const express = require("express");
const router = express.Router();
const { signupuser, checkEmail, verifyOtp, resetPassword } = require("../Controllers/UserController");

router.post("/signup", signupuser);
router.post("/check-email", checkEmail);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

module.exports = router;
