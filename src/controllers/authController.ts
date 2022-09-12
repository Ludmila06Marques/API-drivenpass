import { Request , Response } from "express"
import { createUser , loginUser} from "../services/userService.js";

export async function login(req:Request ,res:Response){
  const user = req.body;
  const token = await loginUser(user);
  res.send({token});
}

export async function signup(req:Request ,res:Response){
  const user = req.body;
  await createUser(user);
  res.sendStatus(201);
}