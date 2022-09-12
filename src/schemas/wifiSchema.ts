import joi from "joi";
import { CreateWifiSchema } from "../services/wifiService.js";

export const wifiSchema = joi.object<CreateWifiSchema>({
  title: joi.string().required(),
  network: joi.string().required(),
  password: joi.string().required()
});