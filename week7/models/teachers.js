const mongoose = require("mongoose");

// the schema model for all students created
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  education: { type: String, required: true },
  isEmployed: Boolean,
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
