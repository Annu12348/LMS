import mongoose, { Types } from "mongoose";

const courseSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true,
    trim: true,
  },
  subTitle: {
    type: String,
    //required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  courseLevel: {
    type: String,
    enum: ["Biginner", "Middium", "Advance"],
  },
  coursePrice: {
    type: Number,
  },
  coursethumbnail: {
    type: String,
  },
  enrollStudent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
},{
    timestamps: true
});

const courseModel = mongoose.model("course", courseSchema);
export default courseModel;
