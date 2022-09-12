import { Router } from "express";
import { validateTokenFunction } from "../middlewares/validateToken.js";
import * as credencialRoutes from "../controllers/credentialController.js"


const credencialRoute = Router();

credencialRoute.post("/credential" , validateTokenFunction, credencialRoutes.createCredencial);
credencialRoute.get("/credential" ,  validateTokenFunction, credencialRoutes.getCredencial);
credencialRoute.get("/credential/:id" ,  validateTokenFunction, credencialRoutes.getOneCredential);
credencialRoute.delete("/credential/:id" ,validateTokenFunction,  credencialRoutes.deleteCredencial);

export default credencialRoute;