import { Request , Response } from "express"
import { getAll , getCard , deleteCard } from "../services/cardsService.js";

export async function createCard(req:Request ,res:Response){
  return  console.log("to na rota createCard")
}

export async function getCardFunction(req:Request ,res:Response){
  const { user } = res.locals;
  const cards = await getAll(user.id);
  res.send(cards);
}

export async function getOneCard(req: Request , res:Response){
  const { user } = res.locals;
  const cardId = parseInt(req.params.id);
  if(isNaN(cardId)){
    res.sendStatus(422);
  const card = await  getCard(user.id, cardId);
  res.send(card);
}
}


export async function deleteCardFunction(req:Request ,res:Response){
  const cardId = parseInt(req.params.id);
  if(isNaN(cardId)) {
    res.sendStatus(422);
  }
  const { user } = res.locals;
  await deleteCard(user, cardId);
  res.sendStatus(200);
}