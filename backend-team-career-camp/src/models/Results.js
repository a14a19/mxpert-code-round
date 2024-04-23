import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema({
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
    result: {
        type: String,
        enum: ["PASS", "FAIL", "On Hold", "Didn't Attempt"]
    },
});

export default mongoose.model("Results", resultsSchema);