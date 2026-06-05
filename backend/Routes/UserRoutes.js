const express = require("express");
const router = express.Router();
const { signupuser } = require("../Controllers/UserController");

router.post("/signup", signupuser);

module.exports = router;
