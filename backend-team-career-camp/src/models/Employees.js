import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
});

export default mongoose.model("Employees", employeesSchema);