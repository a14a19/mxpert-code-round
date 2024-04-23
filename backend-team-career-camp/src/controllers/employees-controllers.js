import Employees from "../models/Employees.js";
import Student from "../models/Student.js";
import bcrypt from "bcrypt";

export const signInEmployees = async (req, res, next) => {
    try {
        let { email } = req.body;
        email = email.toLowerCase();
        const employee = await Employees.findOne({ email })
        const students = await Student.find({});
        if (!employee) {
            return res.status(401).render("SignIn", { title: "Team Career Camp", data: "Sign In", errorStatus: true, errorMessage: "User not registered" })
        }
        console.log(students)
        // return res.status(200).json({ message: "Ok", employee, status: true });
        return res.status(200).render("StudentsList", { title: "Team Career Camp", sub_title: "Students list", data: students, errorStatus: false, errorMessage: "" })
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message, status: false });
    }
};

export const signUpEmployees = async (req, res, next) => {
    try {
        if (req.body.password.trim() !== req.body.cnf_password.trim()) {
            return res.status(500).render("SignUp", { title: "Team Career Camp", data: "Sign Up", errorStatus: true, errorMessage: "Password and Confirm password doesn't match, please try again." })
        }
        req.body.password = bcrypt.hashSync(req.body.password.trim(), 10);
        let data = {
            name: req.body.name.trim().toLowerCase(),
            email: req.body.email.trim().toLowerCase(),
            password: req.body.password,
        };
        const employee = new Employees(data).save();
        if (!employee) {
            return res.status(500).render("SignUp", { title: "Team Career Camp", data: "Sign Up", errorStatus: true, errorMessage: "User not registered, please try again." })
        }
        return res.status(200).json({ message: "Ok", employee, status: true });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message, status: false });
    }
};