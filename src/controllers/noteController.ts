import { Request , Response } from "express"

export async function createNote(req:Request ,res:Response){
  return  console.log("to na rota createNote")
}

export async function getNote(req:Request ,res:Response){
    return console.log("to na rota getNote")
}
export async function deleteNote(req:Request ,res:Response){
    return console.log("to na rota deleteNote")
}