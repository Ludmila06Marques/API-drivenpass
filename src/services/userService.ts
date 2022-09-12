import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUserByEmail , insertUser , findById  } from "../repositories/userRepository.js";
import { failUnauth, failNotFound , failsConflict } from "../utils/errorUtils.js";

export type CreateUserSchema= Omit <User , "id">
dotenv.config()

export async function createUser(user:CreateUserSchema){
    const userExist = await findUserByEmail(user.email);
    if (userExist) {
      throw failsConflict();
    }
  
    const rand = 10;
    const criptoPass = bcrypt.hashSync(user.password, rand);
    await insertUser({...user, password: criptoPass});
}

export async function loginUser(login: CreateUserSchema) {
  const user = await createToken(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}

export async function createToken(login: CreateUserSchema) {
  const user = await findUserByEmail(login.email);
  if (!user) throw failUnauth("unauthorized");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw failUnauth("Invalid passwofd");

  return user;
}


export async function findUserById(id: number) {
  const user = await findById(id);
  if (!user) throw failNotFound("User not found");

  return user;
}
