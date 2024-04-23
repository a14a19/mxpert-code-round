import { Router } from "express";
import { getAllStudents, addStudent } from "../controllers/student-controllers.js";

const studentRoutes = Router();

studentRoutes.get("/list", getAllStudents);
studentRoutes.post("/add-student", addStudent);

export default studentRoutes;