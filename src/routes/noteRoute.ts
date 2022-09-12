import { Router } from "express";
import * as noteRoutes from "../controllers/noteController.js"
import { validateTokenFunction } from "../middlewares/validateToken.js";

const noteRoute = Router();

noteRoute.post("/note" ,validateTokenFunction, noteRoutes.createNote);
noteRoute.get("/note" ,validateTokenFunction, noteRoutes.getNote);
noteRoute.get("/note/:id" ,validateTokenFunction, noteRoutes.getOneNote);
noteRoute.delete("/note/:id" ,validateTokenFunction, noteRoutes.deleteNote);

export default noteRoute;