
import  { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllNotes = async (req, res) => {
    try{
        const allnotes = await prisma.note.findMany()
        res.json(allnotes)
    }catch(error){
        res.json(error.message)
    }
    
}

export const getOneNote = async (req, res) => {
    const idToConsult = req.params.id
    try{
        const note = await prisma.note.findFirst(idToConsult)
        res.json(note)
    }catch(error){

    }
    
}