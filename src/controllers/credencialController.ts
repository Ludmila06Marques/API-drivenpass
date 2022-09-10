import { Request , Response } from "express"

export async function createCredencial(req:Request ,res:Response){
  return  console.log("to na rota createCredencial")
}

export async function getCredencial(req:Request ,res:Response){
    return console.log("to na rota getCredencial")
}
export async function deleteCredencial(req:Request ,res:Response){
    return console.log("to na rota deleteCredencial")
}