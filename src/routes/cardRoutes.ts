import { Router } from "express";
import * as cardRoutes from "../controllers/cardController.js"
import { validateTokenFunction } from "../middlewares/validateToken.js";

const cardRoute = Router();

cardRoute.post("/card" , validateTokenFunction, cardRoutes.createCard);
cardRoute.get("/card" , validateTokenFunction,cardRoutes.getCardFunction);
cardRoute.get("/card/:id" ,validateTokenFunction, cardRoutes.getOneCard);
cardRoute.delete("/card/:id" ,validateTokenFunction, cardRoutes.deleteCardFunction);

export default cardRoute;