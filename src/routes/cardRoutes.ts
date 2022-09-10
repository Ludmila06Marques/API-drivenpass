import { Router } from "express";
import * as cardRoutes from "../controllers/cardController.js"

const cardRoute = Router();

cardRoute.post("/card" , cardRoutes.createCard);
cardRoute.get("/card" , cardRoutes.getCard);
cardRoute.delete("/card/:id" , cardRoutes.deleteNCard);

export default cardRoute;