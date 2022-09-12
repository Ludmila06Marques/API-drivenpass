import joi from "joi";
import { CreateNoteSchema } from "../services/noteService";

export const safeNoteSchema = joi.object<CreateNoteSchema>({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required()
});