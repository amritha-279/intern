const express = require("express");
const router = express.Router();
const {
  submitContact,
  getMessages,
  replyMessage,
  deleteMessage,
} = require("../Controllers/contactController");

router.post("/", submitContact);
router.get("/", getMessages);
router.put("/:id/reply", replyMessage);
router.delete("/:id", deleteMessage);

module.exports = router;
