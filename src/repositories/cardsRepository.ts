import { prisma } from "../dbStrategy/db.js";
import { CreateCardSchema } from "../services/cardsService.js";

export async function getAllCards(userId: number) {
  return prisma.card.findMany({
    where: { userId }
  })
}

export async function getOneCard(userId: number, cardId: number) {
  return prisma.card.findFirst({
    where: {
      userId,
      id: cardId
    }
  })
}

export async function getCardByTitle(userId: number, title: string) {
  return prisma.card.findFirst({
    where: { userId, title }
  })
}

export async function insertCard(userId: number, card: CreateCardSchema) {
  console.log("passeiaq")
  return prisma.card.create({
    data: {...card, userId }
  })
}

export async function deleteOneCard(id: number) {
  return prisma.card.delete({ where: { id } });
}