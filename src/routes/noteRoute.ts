import { Router } from "express";
import * as noteRoutes from "../controllers/noteController.js"

const noteRoute = Router();

noteRoute.post("/note" , noteRoutes.createNote);
noteRoute.get("/note" , noteRoutes.getNote);
noteRoute.delete("/note/:id" , noteRoutes.deleteNote);

export default noteRoute;