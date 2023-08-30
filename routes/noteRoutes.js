import  Router from "express";
import { getOneNote, getNotesBySearchCriteria, getAllNotes, getNotesByCategory} from '../controllers/NoteController.js'

const NoteRoutes = Router()

NoteRoutes.get('/all', getAllNotes)
NoteRoutes.get('/:id', getOneNote)
NoteRoutes.get('/bycategory/:categoryId', getNotesByCategory)
NoteRoutes.get('/bysearchcriteria/:criteria', getNotesBySearchCriteria)
/* NoteRoutes.get('/viewed',getVisitedNotes)
NoteRoutes.post('/', createNote)
NoteRoutes.put('/:id', updateNote)
NoteRoutes.delete('/:id', deleteNote) */

export default NoteRoutes