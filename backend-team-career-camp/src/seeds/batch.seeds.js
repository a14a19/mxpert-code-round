// * to insert batch to database

import Batch from "../models/Batch.js";
import mongoose from "mongoose";

// * connection and inserting data
mongoose.connect('mongodb://127.0.0.1:27017/anas-mxpert', {}).then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
}).catch((err) => {
    console.log(err);
});

const createBatchSeed = async () => {
    try {
        const batchData = [
            {
                batch: "TC-0001"
            },
            {
                batch: "TC-0002"
            },
            {
                batch: "TC-0003"
            },
        ];

        const addBatch = await Batch.insertMany(batchData);

        if (!addBatch) {
            throw new Error("Unable to insert Batch");
        }
    } catch (e) {
        throw new Error("Error", e);
    }
};

createBatchSeed().then(() => {

});