import { Router } from "express";
import * as wifiRoutes from "../controllers/wifiController.js"
import { validateTokenFunction } from "../middlewares/validateToken.js";

const wifiRoute = Router();

wifiRoute.post("/wifi" ,validateTokenFunction, wifiRoutes.createWifi);
wifiRoute.get("/wifi" , validateTokenFunction,wifiRoutes.getWifi);
wifiRoute.get("/wifi/:id" , validateTokenFunction,wifiRoutes.getOneWifi);
wifiRoute.delete("/wifi/:id" ,validateTokenFunction, wifiRoutes.deleteWifi);

export default wifiRoute;