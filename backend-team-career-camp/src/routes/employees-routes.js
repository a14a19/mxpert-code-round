import { Router } from "express";
import { signInEmployees, signUpEmployees } from "../controllers/employees-controllers.js";

const employeesRoutes = Router();

employeesRoutes.post("/sign-in", signInEmployees)
employeesRoutes.post("/sign-up", signUpEmployees)

export default employeesRoutes;