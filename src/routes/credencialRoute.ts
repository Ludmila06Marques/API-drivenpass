import { Router } from "express";
import * as credencialRoutes from "../controllers/credencialController.js"

const credencialRoute = Router();

credencialRoute.post("/credencial" , credencialRoutes.createCredencial);
credencialRoute.get("/credencial" , credencialRoutes.getCredencial);
credencialRoute.delete("/credencial" , credencialRoutes.deleteCredencial);

export default credencialRoute;