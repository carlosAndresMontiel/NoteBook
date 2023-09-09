
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
    const now = new Date()
    try{
        const note = await prisma.note.update({
            where: { id: idToConsult },
            data: { visitedAt: now }
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

export const getVisitedNotes = async (req, res) => {
    try{
        const visitedNotes = await prisma.note.findMany({
            where: {visitedAt: {not: null}},
            include: {category: true}
        })
        res.json(visitedNotes)
    }catch(error){
        res.json({error: error.message})
    }
} 

export const createNote = async (req, res) => {
    try{
        //const newNote = await prisma.note.create({data: req.body})
        res.json(req.body)
    }catch(error){
        res.json({error: error.message})
    }
}

export const updateNote = async (req, res) => {
    const noteIdToUpdate = parseInt(req.params.id)
    try{
        const noteUpdated = await prisma.note.update({
            where: { id: noteIdToUpdate },
            data: req.body
        })
        res.json(noteUpdated)
    }catch(error){
        res.json({error: error.message})
    }
}

export const deleteNote = async (req, res) => {
    const noteIdToDelete = parseInt(req.params.id)
    try{
        const noteDeleted = await prisma.note.delete({
            where: { id: noteIdToDelete }
        })
        res.json(noteDeleted)
    }catch(error){
        res.json({error: error.message})
    }
}