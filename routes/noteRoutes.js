import  Router from "express";
import { getOneNote, createNote, updateNote, deleteNote, getNotesBySearchCriteria, getVisitedNotes, getAllNotes, getNotesByCategory} from '../controllers/NoteController.js'

const NoteRoutes = Router()

NoteRoutes.get('/all', getAllNotes)
NoteRoutes.get('/bycategory/:criteria', getNotesByCategory)
NoteRoutes.get('/byfields/:criteria', getNotesBySearchCriteria)
NoteRoutes.get('/viewed',getVisitedNotes)
NoteRoutes.get('/:id', getOneNote)
NoteRoutes.post('/', createNote)
NoteRoutes.put('/:id', updateNote)
NoteRoutes.delete('/:id', deleteNote)

export default NoteRoutes