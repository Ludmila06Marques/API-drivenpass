import { Request , Response } from "express"

export async function login(req:Request ,res:Response){
  return  console.log("to na rota login")
}

export async function signup(req:Request ,res:Response){
    return console.log("to na rota signup")
}