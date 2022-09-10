import { Router } from "express";
import * as wifiRoutes from "../controllers/wifiController.js"

const wifiRoute = Router();

wifiRoute.post("/wifi" , wifiRoutes.createWifi);
wifiRoute.get("/wifi" , wifiRoutes.getWifi);
wifiRoute.delete("/wifi/:id" , wifiRoutes.deleteWifi);

export default wifiRoute;