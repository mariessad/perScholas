const mongoose = require("mongoose");

// the schema model for all students created
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gpa: { type: String, required: true },
  isPassing: Boolean,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
