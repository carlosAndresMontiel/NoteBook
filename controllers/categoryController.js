import Category from '../models/CategoryModel.js'

export const getCategories = async (req, res) => {

    try {
        const allCategories = await Category.findAll()
        res.json(allCategories)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCategory = async (req, res) => {
    try {
        const category = await Category.findByPk( req.params.id )
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCategory = async (req, res) => {
    try {
        const category = await Category.create( req.body )
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.update( req.body, {where: {id: req.params.id}} )
        res.json(category)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCategory = async (req, res) => {
    try {
        await Category.destroy( {where: {id:req.params.id}} )
        res.json({message: "the category was deleted" })
    } catch (error) {
        res.json({message: 'This category cannot be deleted, it is been used by one or more notes'})
    }
}
