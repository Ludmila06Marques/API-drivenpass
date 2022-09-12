import { prisma } from "../dbStrategy/db.js";
import { CreateWifiSchema } from "../services/wifiService.js";

export async function getAll(userId: number) {
  return prisma.wifi.findMany({
    where: { userId }
  })
}

export async function getWifiFunction(userId: number, wifiId: number) {
  return prisma.wifi.findFirst({
    where: {
      userId,
      id: wifiId
    }
  })
}

export async function createWifiFunction(userId: number, wifi: CreateWifiSchema) {
  return prisma.wifi.create({
    data: {...wifi, userId }
  })
}

export async function deleteWifiFunction(id: number) {
  return prisma.wifi.delete({
    where: { id }
  })
}