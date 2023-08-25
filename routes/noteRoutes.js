import  express from "express";
import { getNote, createNote, updateNote, deleteNote, getNotes, getVisited, getAllNotes, getNotesByCategory} from '../controllers/noteController.js'

const noteRouter = express.Router()

noteRouter.get('/all', getAllNotes)
noteRouter.get('/bycategory/:criteria', getNotesByCategory)
noteRouter.get('/byfields/:criteria', getNotes)
noteRouter.get('/viewed',getVisited)
noteRouter.get('/:id', getNote)
noteRouter.post('/', createNote)
noteRouter.put('/:id', updateNote)
noteRouter.delete('/:id', deleteNote)

export default noteRouter