import mongoose from "mongoose";

const courseScoreSchema = new mongoose.Schema({
    interview_Id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Interviews",
    },
    student_Id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Student",
    },
    dsa_score: {
        type: Number,
        require: true,
    },
    webd_score: {
        type: Number,
        require: true,
    },
    react_score: {
        type: Number,
        require: true,
    },
})

export default mongoose.model("CourseScore", courseScoreSchema);