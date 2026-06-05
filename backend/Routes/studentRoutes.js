const express = require("express");
const router = express.Router();
const {
  registerStudent,
  getStudents,
  updateStudentStatus,
  deleteStudent,
} = require("../Controllers/studentController");

router.post("/register", registerStudent);
router.get("/", getStudents);
router.put("/:id/status", updateStudentStatus);
router.delete("/:id", deleteStudent);

module.exports = router;
