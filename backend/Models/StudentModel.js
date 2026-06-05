const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName:     { type: String },
  lastName:      { type: String },
  age:           { type: Number },
  dob:           { type: String },
  email:         { type: String, required: true, unique: true },
  phone:         { type: String },
  batch:         { type: String },
  experience:    { type: String },
  startDate:     { type: String },
  amount:        { type: String },
  payment:       { type: String },
  password:      { type: String },
  paymentId:     { type: String },
  parentName:    { type: String },
  parentPhone:   { type: String },
  yearsTraining: { type: String },
  currentGuru:   { type: String },
  perfExperience:{ type: String },
  workshopType:  { type: String },
  status:        { type: String, default: "Pending" },
  role:          { type: String, default: "user" },
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
