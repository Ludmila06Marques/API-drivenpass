import { Note, User } from "@prisma/client";
import { failsConflict, failNotFound } from "../utils/errorUtils.js";
import { getAll , getOneNote , getByTitle , deleteNote , insertNote } from "../repositories/noteRepository.js";

export type CreateNoteSchema = Omit<Note, "id">;

export async function getAllNotes(userId: number) {
  const notes = await getAll(userId);
  return notes;
}

export async function getOneNoteFunction(userId: number, noteId: number) {
  const note = await getOneNote(userId, noteId);
  if(!note) throw failNotFound("Note does not exist");

  return note;
}

export async function createNoteFunction(user: User, note: CreateNoteSchema) {
  const existNote = await getByTitle(user.id, note.title);
  if(existNote) throw failsConflict("Title already exist");
  await insertNote(user.id, note);
}

export async function deleteNoteFunction(user: User, noteId: number) {
  await getOneNote(user.id, noteId);
  await deleteNote(noteId);
}


