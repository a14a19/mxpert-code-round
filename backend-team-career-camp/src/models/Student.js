import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    s_id: {
        type: String,
        require: true,
        // unique: true,
        default: Math.ceil(Math.random() * 100000000)
    },
    college: {
        type: String,
        require: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["placed", "not_placed"],
    },
    batch: {
        type: String,
        require: true
    },
})

export default mongoose.model("Student", studentSchema);