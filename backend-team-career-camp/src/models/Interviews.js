import mongoose from "mongoose";

const interviewsSchema = new mongoose.Schema({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Company",
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Student",
    },
    company_name: {
        type: String,
        require: true,
        trim: true,
    },
    date: {
        type: Date,
        require: true,
    },
    result: {
        type: String,
        enum: ["PASS", "FAIL", "On Hold", "Didn't Attempt"]
    },
    score_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseScore",
    },
});

export default mongoose.model("Interviews", interviewsSchema);