import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureTitle: {
        type: String,
        required: true,
        unique: true
    },
    videoUrl: {
        type: String,
        default: ""
    },
    publicId: {
        type: String,
        default: ""
    },
    ispreviewFree: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const lectureModel = mongoose.model("lecture", lectureSchema);
export default lectureModel;