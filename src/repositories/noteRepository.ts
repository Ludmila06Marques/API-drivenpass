import { CreateNoteSchema } from "../services/noteService.js";
import { prisma } from "../dbStrategy/db.js";

export async function getAll(userId: number) {
  return prisma.note.findMany({
    where: { userId }
  });
 
}

export async function getOneNote(userId: number, noteId: number) {
  return prisma.note.findFirst({
    where: {
      userId,
      id: noteId
    }
  })
}

export async function getByTitle(userId: number, title: string) {
  return prisma.note.findFirst({
    where: { userId, title }
  })
}

export async function insertNote(userId: number, note: CreateNoteSchema) {
  return prisma.note.create({
    data: {...note, userId }
  })
}

export async function deleteNote(id: number) {
  return prisma.note.delete({ where: { id } });
}