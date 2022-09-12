import { Request , Response } from "express"
import { Credential } from "@prisma/client"
import { getAllCredentials , getJustOneCredential  , createCredential , deleteCredential} from "../services/credentialService.js";

export async function createCredencial(req:Request ,res:Response){

  const {user} = res.locals;
  const credential = req.body;

  await createCredential(user, credential);
  res.sendStatus(201); 
}

export async function getCredencial(req:Request ,res:Response){
 
    const { user } = res.locals;
    const credentials: Credential[] = await getAllCredentials(user.id);
  
    res.send(credentials);

}

export async function getOneCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credentialId = parseInt(req.params.id);
  if(isNaN(credentialId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const credential = await getJustOneCredential(user.id, credentialId);
  res.send(credential);
}
export async function deleteCredencial(req:Request ,res:Response){
  const credentialId = parseInt(req.params.id);
  if(isNaN(credentialId)) {
    res.sendStatus(422); // unprocessable entity
  }
  const { user } = res.locals;
  await deleteCredential(user, credentialId);
  res.sendStatus(200);

}