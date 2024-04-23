// * to insert batch to database

import Companies from "../models/Companies.js";
import mongoose from "mongoose";

// * connection and inserting data
mongoose.connect('mongodb://127.0.0.1:27017/anas-mxpert', {}).then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
}).catch((err) => {
    console.log(err);
});

const createCompanySeed = async () => {
    try {
        const companyData = [
            {
                name: "mxpertz"
            },
            {
                name: "tcs"
            },
            {
                name: "google"
            },
        ];

        const addCompanies = await Companies.insertMany(companyData);

        if (!addCompanies) {
            throw new Error("Unable to insert Batch");
        }
    } catch (e) {
        throw new Error("Error", e);
    }
};

createCompanySeed().then(() => {

});