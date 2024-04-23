import Student from "../models/Student.js";
import Companies from "../models/Companies.js";
import Interviews from "../models/Interviews.js";
import CourseScore from "../models/CourseScore.js";
import Result from "../models/Results.js";

export const allocateInterview = async (req, res, next) => {
    try {
        const { students, date, companies } = req.body;
        const company = await Companies.findById(companies)
        let correctDate = new Date(date)
        let data = {
            student_id: students,
            company_id: companies,
            company_name: company.name,
            date: new Date(date)
        }
        const interviews = new Interviews(data).save();

        const student = await Student.find({})
        const interview = await Interviews.find({})
        const companyList = await Companies.find({})
        return res.render("InterviewList", { title: "Team Career Camp", sub_title: "Interview List", data: [], students: student, interviews: interview, companies: companyList, errorStatus: false, errorMessage: "" })
    } catch (e) {

    }
}

export const updateStudentStatus = async (req, res, next) => {
    try {
        console.log("Working", req.params, req.body)
        let dataToUpdate = {
            result: req.body.result,
        }
        const interview = await Interviews.findByIdAndUpdate(req.params.int_id, dataToUpdate);

        let scoreData = {
            interview_Id: req.params.int_id,
            student_Id: interview.student_id,
            dsa_score: +req.body.dsa_score,
            webd_score: +req.body.web_score,
            react_score: +req.body.react_score
        }
        const courseScore = await CourseScore(scoreData).save()

        await Student.findByIdAndUpdate(interview.student_id, { status: req.body.status });

        let resultData = {
            company_id: interview.company_id,
            student_id: interview.student_id,
            result: req.body.result,
        }
        const resultInsert = await Result(resultData).save()

        await Interviews.findByIdAndUpdate(req.params.int_id, { ...dataToUpdate, score_id: courseScore._id });
        console.log(interview, "Updated", courseScore, resultInsert)
        const interviews = await Interviews.find({ company_id: req.params.int_id }).populate({ path: 'student_id' }).populate({ path: 'score_id' })

        return res.status(200).render("InterviewListByStudent", { title: "Team Career Camp", sub_title: "Interview List", data: [], interviews: interviews, errorStatus: false, errorMessage: "", interview_id: interview.company_id })
    } catch (e) {

    }
}