import  {Router} from "express";
import { getAllCategories, getOneCategory, createCategory, updateCategory, deleteCategory } from '../controllers/CategoryController.js'

const CategoryRoutes = Router()

CategoryRoutes.get('/', getAllCategories)
CategoryRoutes.get('/:id', getOneCategory)
CategoryRoutes.post('/', createCategory)
CategoryRoutes.put('/:id', updateCategory)
CategoryRoutes.delete('/:id', deleteCategory)

export default CategoryRoutes 