import { Request , Response } from "express"
import { getAllWifi , getOneWifiFunction ,deleteWifiService , createWifiService } from "../services/wifiService.js";

export async function createWifi(req:Request ,res:Response){
  const { user } = res.locals;
  const wifi = req.body;

  await createWifiService(user, wifi);
  res.sendStatus(201); 

  
}

export async function getWifi(req:Request ,res:Response){
  const { user } = res.locals;
  const wifi = await getAllWifi(user.id);
  res.send(wifi);
}

export async function getOneWifi(req:Request ,res:Response){
const { user } = res.locals;
const wifiId = parseInt(req.params.id);
if(isNaN(wifiId)) {
  res.sendStatus(422); 
}
const wifi = await getOneWifiFunction(user.id, wifiId)
res.send(wifi);
}

export async function deleteWifi(req:Request ,res:Response){
  const wifiId = parseInt(req.params.id);
  if(isNaN(wifiId)) {
    res.sendStatus(422);
  }

  const { user } = res.locals;
  await deleteWifiService(user, wifiId);
  res.sendStatus(200);
}