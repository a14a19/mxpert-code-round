import parser from "json-2-csv";
import Interviews from "../models/Interviews.js";

export const downloadCsv = async (req, res, next) => {
    // const interviews = await Interviews.find({ company_id: req.params.interview_id }).populate({ path: 'student_id' });
    // console.log("csv", interviews)
    // let data = [

    // ]

    // let options = {
    //     expandNestedObjects: true,
    // }
    // const csv = await converter.json2csv(data, options);
}