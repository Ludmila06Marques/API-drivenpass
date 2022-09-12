import { Request , Response } from "express"
import { getAllNotes , getOneNoteFunction  , createNoteFunction , deleteNoteFunction} from "../services/noteService.js";

export async function createNote(req:Request ,res:Response){
  const {user} = res.locals;
  const note = req.body;
  await createNoteFunction(user, note);
  res.sendStatus(201); 
}
export async function getNote(req:Request ,res:Response){
  const { user } = res.locals;
  const notes = await getAllNotes(user.id);

  res.send(notes);
}
export async function getOneNote(req:Request ,res:Response){
  const { user } = res.locals;
  const noteId = parseInt(req.params.id);
  if(isNaN(noteId)) {
    res.sendStatus(422);
  }

  const note = await getOneNoteFunction(user.id, noteId);
  res.send(note);
}
export async function deleteNote(req:Request ,res:Response){
  const nodeId = parseInt(req.params.id);
  if(isNaN(nodeId)) {
    res.sendStatus(422);
  }

  const { user } = res.locals;
  await deleteNoteFunction(user, nodeId);
  res.sendStatus(200);
}

