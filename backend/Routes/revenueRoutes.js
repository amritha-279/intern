const express = require("express");
const router = express.Router();
const { getRevenue } = require("../Controllers/revenueController");

router.get("/", getRevenue);

module.exports = router;
