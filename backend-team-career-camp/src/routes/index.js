import { Router } from "express";
import studentRoutes from "./student-routes.js";
import employeesRoutes from "./employees-routes.js";
import interviewRoutes from "./interview-routes.js";
import Student from "../models/Student.js";
import Companies from "../models/Companies.js";
import Interviews from "../models/Interviews.js";
import { downloadCsv } from "../helpers/csv.js";

const appRouter = Router();

// ! ejs pages render from here
appRouter.get("/", (req, res) => {
    res.render("Home", { title: "Team Career Camp", })
});
appRouter.get("/sign-in", (req, res) => {
    res.render("SignIn", { title: "Team Career Camp", data: "Sign In", errorStatus: false, errorMessage: "" })
});
appRouter.get("/sign-up", (req, res) => {
    res.render("SignUp", { title: "Team Career Camp", data: "Sign Up", errorStatus: false, errorMessage: "" })
});
appRouter.get("/students-list", async (req, res) => {
    const students = await Student.find({})
    res.render("StudentsList", { title: "Team Career Camp", sub_title: "Students list", data: students, errorStatus: false, errorMessage: "" })
});
appRouter.get("/add-student", (req, res) => {
    res.render("AddStudent", { title: "Team Career Camp", sub_title: "Add Student", data: [], errorStatus: false, errorMessage: "" })
});
appRouter.get("/interview-list", async (req, res) => {
    const students = await Student.find({})
    const interviews = await Interviews.find({})
    const companies = await Companies.find({})
    res.render("InterviewList", { title: "Team Career Camp", sub_title: "Interview List", data: [], students: students, interviews: interviews, companies: companies, errorStatus: false, errorMessage: "", fn: downloadCsv })
});
appRouter.get("/interview-list/:interview_id", async (req, res) => {
    // const students = await Student.find({})
    const interviews = await Interviews.find({ company_id: req.params.interview_id }).populate({ path: 'student_id'}).populate({ path: 'score_id' });
    // const companies = await Companies.find({})
    // console.log(interviews);
    res.render("InterviewListByStudent", { title: "Team Career Camp", sub_title: "Interview List", data: [], interviews: interviews, errorStatus: false, errorMessage: "", interview_id: req.params.interview_id })
});
appRouter.get("/allocate-interview", async (req, res) => {
    const students = await Student.find({})
    const companies = await Companies.find({})
    res.render("AllocateInt", { title: "Team Career Camp", sub_title: "Allocate Interview", data: [], students: students, companies: companies, errorStatus: false, errorMessage: "" })
});

// * different routes grouping
appRouter.use("/students", studentRoutes);
appRouter.use("/employees", employeesRoutes);
appRouter.use("/interviews", interviewRoutes);

export default appRouter;