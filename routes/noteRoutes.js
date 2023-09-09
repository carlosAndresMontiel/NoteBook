import  Router from "express";
import { getOneNote, getNotesBySearchCriteria, getAllNotes, getNotesByCategory, getVisitedNotes, createNote, updateNote, deleteNote} from '../controllers/NoteController.js'
import { validateNewNote } from "../middlewares/validators/NotesValidator.js";

const NoteRoutes = Router()

NoteRoutes.get('/visited',getVisitedNotes)
NoteRoutes.get('/all', getAllNotes)
NoteRoutes.get('/:id', getOneNote)
NoteRoutes.get('/bycategory/:categoryId', getNotesByCategory)
NoteRoutes.get('/bysearchcriteria/:criteria', getNotesBySearchCriteria)
NoteRoutes.post('/', validateNewNote, createNote)
NoteRoutes.put('/:id', updateNote)
NoteRoutes.delete('/:id', deleteNote)

export default NoteRoutes