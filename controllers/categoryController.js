import CategoryModel from '../models/CategoryModel.js'

export const getAllCategories = async (req, res) => {

    try {
        const allCategories = await CategoryModel.findAll()
        res.json(allCategories)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getOneCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findByPk( req.params.id )
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCategory = async (req, res) => {
    try {
        const createdCategory = await CategoryModel.create( req.body )
        res.json(createdCategory)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await CategoryModel.update( req.body, {where: {id: req.params.id}} )
        res.json(updatedCategory)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCategory = async (req, res) => {
    try {
        await CategoryModel.destroy( {where: {id:req.params.id}} )
        res.json({message: "the category was deleted" })
    } catch (error) {
        res.json({message: 'This category cannot be deleted, it is been used by one or more notes'})
    }
}
