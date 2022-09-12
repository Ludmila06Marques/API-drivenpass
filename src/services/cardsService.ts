import { User, Card } from "@prisma/client";
import { decrypt, encrypt } from "../utils/cripto.js";
import { failsConflict, failNotFound } from "../utils/errorUtils.js";
import { getAllCards, getOneCard , getCardByTitle  , insertCard , deleteOneCard} from "../repositories/cardsRepository.js";

export type CreateCardSchema = Omit<Card, "id">;

export async function getAll(userId: number) {
  const cards = await getAllCards(userId);
  return cards.map(card => {
    return {
      ...card, 
      password: decrypt(card.password),
      securityCode: decrypt(card.securityCode)
    }
  })
}

export async function getCard(userId: number, cardId: number) {
  const card = await getOneCard(userId, cardId);
  if(!card) throw failNotFound("Card does not exist");

  return {
    ...card,
    password: decrypt(card.password),
    securityCode: decrypt(card.securityCode)
  }
}

export async function createCard(user: User, card: CreateCardSchema) {

 
  const existingCard = await getCardByTitle(user.id, card.title);
  if(existingCard) throw failsConflict("Title already exist");

  const cardData: CreateCardSchema = {
    ...card, 
    password: encrypt(card.password),
    securityCode: encrypt(card.securityCode)
  }

  await insertCard(user.id, cardData);
}

export async function deleteCard(user: User, cardId: number) {
  await getCard(user.id, cardId);
  await deleteOneCard(cardId);
}

