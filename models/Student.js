
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"]
    },
    rollNo: {
      type: String,
      required: [true, "Roll number is required"],
      trim: true,
      unique: true
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true
    },
    semester: {
      type: Number,
      required: [true, "Semester is required"],
      min: [1, "Semester must be at least 1"],
      max: [8, "Semester cannot exceed 8"],
      validate: {
        validator: Number.isInteger,
        message: "Semester must be a whole number"
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
