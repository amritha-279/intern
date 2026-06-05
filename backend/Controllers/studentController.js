const Student = require("../Models/StudentModel");

// REGISTER STUDENT
const registerStudent = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered." });

    const student = new Student({ ...req.body });
    const saved = await student.save();

    res.status(201).json({ message: "Registration successful!", data: saved });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: "Registration failed.", error: error.message });
  }
};

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().select("-password").sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students.", error: error.message });
  }
};

// UPDATE STATUS
const updateStudentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await Student.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: "Status updated.", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed.", error: error.message });
  }
};

// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student deleted." });
  } catch (error) {
    res.status(500).json({ message: "Delete failed.", error: error.message });
  }
};

module.exports = { registerStudent, getStudents, updateStudentStatus, deleteStudent };
