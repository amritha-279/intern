const Student = require("../Models/StudentModel");

const getStatistics = async (req, res) => {
  try {
    const total = await Student.countDocuments();
    const approved = await Student.countDocuments({ status: "Approved" });
    const pending = await Student.countDocuments({ status: "Pending" });
    const rejected = await Student.countDocuments({ status: "Rejected" });

    const feeMap = {
      "Beginner Batch": 1500,
      "Intermediate Batch": 2000,
      "Advanced Batch": 2500,
      "Junior Batch (Kids)": 1200,
      "Arangetram Preparation": 5000,
      "Weekend Workshop": 1000,
    };

    let monthlyRevenue = 0;
    const approvedStudents = await Student.find({ status: "Approved" });
    approvedStudents.forEach((s) => { monthlyRevenue += feeMap[s.batch] || 0; });

    // batch counts
    const batches = await Student.aggregate([
      { $group: { _id: "$batch", count: { $sum: 1 } } },
    ]);

    // students per batch with names
    const allStudents = await Student.find().select("firstName lastName batch payment paymentId status");
    const batchStudents = {};
    allStudents.forEach((s) => {
      const key = s.batch || "Unknown";
      if (!batchStudents[key]) batchStudents[key] = [];
      batchStudents[key].push({
        name: `${s.firstName || ""} ${s.lastName || ""}`.trim(),
        payment: s.payment,
        paymentId: s.paymentId,
        status: s.status,
      });
    });

    res.status(200).json({ total, approved, pending, rejected, monthlyRevenue, batches, batchStudents });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch statistics.", error: error.message });
  }
};

module.exports = { getStatistics };
