
import  { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllNotes = async (req, res) => {
    try{
        const allNotes = await prisma.note.findMany({
            include: {category: true}
        })
        res.json(allNotes)
    }catch(error){
        res.json({error: error.message})
    }
    
}

export const getOneNote = async (req, res) => {
    const idToConsult = parseInt(req.params.id)
    try{
        const note = await prisma.note.findFirst({
            where: { id: idToConsult},
            include: { category: true}
        })
        res.json(note)
    }catch(error){
        res.json({error: error.message})
    } 
}

export const getNotesByCategory = async (req, res) => {
    const categoryId = +req.params.categoryId
    try{
        const notesByCategory = await prisma.note.findMany({
            where: {categoryId: categoryId},
            include: {category: true}
        })
        res.json(notesByCategory)
    }catch(error){
        res.json({error: error.message})
    }
}

export const getNotesBySearchCriteria = async (req, res) => {
    const searchCriteria = req.params.criteria
    try{
        const notesBySearchCriteria = await prisma.note.findMany({
            where : {
                OR: [
                    {title: {contains: searchCriteria}},
                    {content: {contains: searchCriteria}},
                    {link: {contains: searchCriteria}}
                ]
            },
            include: {category: true}
        })
        res.json(notesBySearchCriteria)
    }catch(error){
        res.json({error: error.message})
    }
}