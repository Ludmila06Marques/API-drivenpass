import { Router } from "express";
import * as authController from "../controllers/authController.js"

const authRoute = Router();

authRoute.post("/login" , authController.login);
authRoute.post("/sign-up" ,authController.signup);

export default authRoute;