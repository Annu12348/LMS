import mongoose, { Types } from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
      trim: true,
    },
    subTitle: {
      type: String,
      required: true,
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
      enum: ["Biginner", "Middium", "Advance", ""],
    },
    imageCourseUrl: {
      type: String,
      default: "",
    },
    coursePrice: {
      type: Number,
    },
    publicId: {
      type: String,
      default: ""
    },
    enrollStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lecture",
      },
    ],

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model("course", courseSchema);
export default courseModel;
