const Student = require("../Models/StudentModel");

const getRevenue = async (req, res) => {
  try {
    const students = await Student.find({ status: "Approved" });

    const feeMap = {
      "Beginner Batch": 1500,
      "Intermediate Batch": 2000,
      "Advanced Batch": 2500,
      "Junior Batch (Kids)": 1200,
      "Arangetram Preparation": 5000,
      "Weekend Workshop": 1000,
    };

    let monthlyRevenue = 0;
    const batchRevenue = {};

    students.forEach((s) => {
      const fee = feeMap[s.batch] || 0;
      monthlyRevenue += fee;
      batchRevenue[s.batch] = (batchRevenue[s.batch] || 0) + fee;
    });

    const yearlyRevenue = monthlyRevenue * 12;
    const totalStudents = await Student.countDocuments();
    const approved = students.length;
    const collectionRate = totalStudents > 0 ? Math.round((approved / totalStudents) * 100) : 0;

    const pendingStudents = await Student.find({ status: "Pending" });
    let pendingPayments = 0;
    pendingStudents.forEach((s) => {
      pendingPayments += feeMap[s.batch] || 0;
    });

    res.status(200).json({
      monthlyRevenue,
      yearlyRevenue,
      pendingPayments,
      collectionRate,
      batchRevenue,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch revenue.", error: error.message });
  }
};

module.exports = { getRevenue };
