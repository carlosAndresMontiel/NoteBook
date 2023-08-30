import  { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllNotes = async () => {
    const allnotes = await prisma.note.findMany()
    
}