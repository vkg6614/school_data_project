import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  gender: { type: String, default: "male" },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => value >= 1500.5,
  },
});
const Student = mongoose.model("student", studentSchema);

export default Student;
