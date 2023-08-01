import  express from "express";
import { getNote, createNote, updateNote, deleteNote, getNotes, getVisited } from '../controllers/noteController.js'

const noteRouter = express.Router()

noteRouter.get('/:fild/:criteria', getNotes)
noteRouter.get('/visited',getVisited)
noteRouter.get('/:id', getNote)
noteRouter.post('/', createNote)
noteRouter.put('/:id', updateNote)
noteRouter.delete('/:id', deleteNote)

export default noteRouter