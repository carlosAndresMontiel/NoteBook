import Category from '../models/Category.js'

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
        await notes.destroy( {where: {id:req.params.id}} )
        res.json({message: "the note was deleted" })
    } catch (error) {
        res.json({message: error.message})
    }
}
