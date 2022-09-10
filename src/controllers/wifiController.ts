import { Request , Response } from "express"

export async function createWifi(req:Request ,res:Response){
  return  console.log("to na rota createWifi")
}

export async function getWifi(req:Request ,res:Response){
    return console.log("to na rota getWifi")
}
export async function deleteWifi(req:Request ,res:Response){
    return console.log("to na rota deleteWifi")
}