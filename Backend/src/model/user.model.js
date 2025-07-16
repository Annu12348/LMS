import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: [ "Student", "Instructor", "Admin" ],
        default: "Student",
    }
})

const userModel = mongoose.model("user", userSchema);
export default userModel;