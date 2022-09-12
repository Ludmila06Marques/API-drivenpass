import { Router } from "express";
import authRoute from "./authRoute.js";
import cardRoute from "./cardRoutes.js";
import credencialRoute from "./credentialRoute.js";
import noteRoute from "./noteRoute.js";
import wifiRoute from "./wifiRoute.js";

const router = Router();

router.use(authRoute);
router.use(cardRoute);
router.use(credencialRoute);
router.use(noteRoute);
router.use(wifiRoute);

export default router;