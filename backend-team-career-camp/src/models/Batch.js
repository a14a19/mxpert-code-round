import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batch: {
        type: String,
        require: true
    }
});

export default mongoose.model("Batch", batchSchema);