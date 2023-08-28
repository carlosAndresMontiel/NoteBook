
import { Op } from 'sequelize'
import NoteModel from '../models/NoteModel.js'
import CategoryModel from '../models/CategoryModel.js'

export const getAllNotes = async(req, res) =>{
    try {
        const allNotes = await NoteModel.findAll({include: CategoryModel})
        res.json(allNotes)
    } catch (error) {
        res.json({error: error.message})
    }
}

export const getNotesBySearchCriteria = async (req, res) => {

    try {
        const allMatchingNotes = await NoteModel.findAll({
            where: { 
                [Op.or]: [
                    {title: {[Op.substring]: req.params.criteria }},
                    {content: {[Op.substring]: req.params.criteria }},
                    {example: {[Op.substring]: req.params.criteria }}
                ]
            } ,
            include: [{model: CategoryModel, required: true}]
        })
        res.json(allMatchingNotes)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getNotesByCategory = async (req, res) => {

    try {
        const notesByCategory = await NoteModel.findAll({
            where: { 
                category_id: req.params.criteria,
            },
            include: [{model: CategoryModel, required: true}]
        })
        res.json(notesByCategory)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getVisitedNotes = async (req, res) => {
    try {
//encontrar todos los registros que han sido visitados, con alguna fecha en visitedAt distinta de null
        const visitedNotes = await NoteModel.findAll({
            where: { visitedAt:{[Op.not]:null} },
            include: [{model: CategoryModel, required: true}]
        })
        res.json(visitedNotes)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getOneNote = async (req, res) => {
    try {
        const note = await NoteModel.findByPk(req.params.id, {include: CategoryModel} )
        res.json(note)// entrega el registro solicitado

        const now = new Date() 
        NoteModel.update( {visitedAt: now}, {where: {id: req.params.id}} )// actualiza la fecha en que se consulto la nota 

    } catch (error) {
        res.json({message: error.message})
    }
}

export const createNote = async (req, res) => {
    try {
        const noteToCreate = await NoteModel.create( req.body)
        const createdNote = await NoteModel.findByPk( noteToCreate.id , {include: CategoryModel})
        res.json(createdNote)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateNote = async (req, res) => {
    try {
        await NoteModel.update( req.body, {where: {id: req.params.id}} )
        const updatedNote = await NoteModel.findByPk(req.params.id, {include: CategoryModel})
        res.json(updatedNote)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteNote = async (req, res) => {
    try {
        await NoteModel.destroy( {where: {id: req.params.id}} )
        res.json({message: "the note was deleted" })
    } catch (error) {
        res.json({message: error.message})
    }
}
