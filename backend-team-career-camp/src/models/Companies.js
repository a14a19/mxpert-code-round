import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    }
})

export default mongoose.model("Company", companySchema);