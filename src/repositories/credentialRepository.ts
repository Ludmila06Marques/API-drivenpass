import { CreateCredentialSchema } from "../services/credentialService.js";
import { prisma } from "../dbStrategy/db.js";


export async function getAll(userId: number) {
  return prisma.credential.findMany({
    where: { userId }
  })
}

export async function getCredential(userId: number, credencialId: number) {
  return prisma.credential.findFirst({
    where: {
      userId,
      id: credencialId
    }
  })
}

export async function getCredentialByTitle(userId: number, title: string) {
  return prisma.credential.findFirst({
    where: { userId, title }
  })
}

export async function insertCredential(userId: number, credential: CreateCredentialSchema) {
  return prisma.credential.create({
    data: {...credential, userId }
  })
}

export async function deleteCredentialRepo(id: number) {
  return prisma.credential.delete({ where: { id } });
}