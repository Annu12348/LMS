import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["Student", "Instructor"],
    default: "Student",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  }],
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
