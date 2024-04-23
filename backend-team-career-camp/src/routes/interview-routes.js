import { Router } from "express";
import { allocateInterview, updateStudentStatus } from "../controllers/interview-controllers.js";

const interviewRoutes = Router();

interviewRoutes.post("/allocate", allocateInterview);
interviewRoutes.post("/update_student_status/:int_id", updateStudentStatus);

export default interviewRoutes;