
import  { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllCategories = async (req, res) => {
    try{
        const allCategories = await prisma.category.findMany()
        res.json(allCategories)
    }catch(error){
        res.json({error: error.message})
    }
}

export const getOneCategory = async (req, res) => {
    const idToConsult = parseInt(req.params.id)
    try{
        const category = await prisma.category.findFirst({
            where: {id: idToConsult}
        })
        res.json(category)
    }catch(error){
        res.json({error: error.message})
    }
}

export const createCategory = async (req, res) => {
    try{
        const newCategory = await prisma.category.create({
            data: req.body
        })
        res.json(newCategory)
    }catch(error){
        res.json({error: error.message})
    }
}

export const updateCategory = async (req, res) => {
    const idToUpdate = parseInt(req.params.id)
    try{
        const categoryUpdated = await prisma.category.update({
            where:{ id: idToUpdate },
            data: req.body
        })
        res.json(categoryUpdated)
    }catch(error){
        res.json({error: error.message})
    }
}

export const deleteCategory = async (req, res) => {
    const idToDelete = parseInt(req.params.id)
    try{
        const categoryDeleted = await prisma.category.delete({
            where:{ id: idToDelete }
           
        })
        res.json(categoryDeleted)
    }catch(error){
        res.json({error: error.message})
    }
}
