import  express from "express";
import { getCategory, createCategory, updateCategory, deleteCategory, getCategories } from '../controllers/categoryController.js'

const categoryRouter = express.Router()

categoryRouter.get('/', getCategories)
categoryRouter.get('/:id', getCategory)
categoryRouter.post('/', createCategory)
categoryRouter.put('/:id', updateCategory)
categoryRouter.delete('/:id', deleteCategory)

export default categoryRouter