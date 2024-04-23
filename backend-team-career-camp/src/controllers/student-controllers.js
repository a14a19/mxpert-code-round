import Student from "../models/Student.js";

export const getAllStudents = async (req, res, next) => {
    try {
        //get all students
        const students = await Student.find({});
        return res.status(200).json({ message: "OK", students });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

export const addStudent = async (req, res, next) => {
    try {
        let data = {
            name: req.body.name.trim(),
            email: req.body.email.trim().toLowerCase(),
            college: req.body.college.trim(),
            batch: "",
        };
        
        const student = new Student(data).save();
        if (!student) {
            return res.render("AddStudent", { title: "Team Career Camp", sub_title: "Add Student", data: [], errorStatus: true, errorMessage: "Error in adding student, please try again." })
        }

        const students = await Student.find({});
        return res.render("StudentsList", { title: "Team Career Camp", sub_title: "Students list", data: students, errorStatus: false, errorMessage: "" })
        // const student = new Student().save()
    } catch (e) {

    }
};