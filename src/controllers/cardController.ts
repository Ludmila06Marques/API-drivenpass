import { Request , Response } from "express"

export async function createCard(req:Request ,res:Response){
  return  console.log("to na rota createCard")
}

export async function getCard(req:Request ,res:Response){
    return console.log("to na rota getCard")
}
export async function deleteNCard(req:Request ,res:Response){
    return console.log("to na rota deleteNCard")
}