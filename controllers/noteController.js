import { Op } from 'sequelize'
import Note from '../models/Note.js'
import Category from '../models/Category.js'

export const getAllNotes = async(req, res) =>{
    try {
        const notes = await Note.findAll({include: Category})
        res.json(notes)
    } catch (error) {
        res.json({error: error.message})
    }
}

export const getNotes = async (req, res) => {

    try {
        const allNotes = await Note.findAll({include: Category}, {where: { [req.params.fild]:{[Op.substring]: req.params.criteria }}})
        res.json(allNotes)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getVisited = async (req, res) => {
    try {
//encontrar todos los registros que han sido visitados, con alguna fecha en visitedAt distinta de null
        const notes = await Note.findAll({include: Category}, {where: { visitedAt:{[Op.not]:null} }})
        res.json(notes)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id, {include: Category} )
        res.json(note)// entrega el registro solicitado

        const now = new Date() // hora actual
        Note.update( {visitedAt: now}, {where: {id: req.params.id}} )// actualiza la fecha de visitado 

    } catch (error) {
        res.json({message: error.message})
    }
}

export const createNote = async (req, res) => {
    try {
        const noteToCreate = await Note.create( req.body , {include: Category})
        const createdNote = await Note.findByPk( noteToCreate.id , {include: Category})
        res.json(createdNote)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateNote = async (req, res) => {
    try {
        await Note.update( req.body, {where: {id: req.params.id}} )
        const note = await Note.findByPk(req.params.id, {include: Category})
        res.json(note)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteNote = async (req, res) => {
    try {
        await Note.destroy( {where: {id: req.params.id}} )
        res.json({message: "the note was deleted" })
    } catch (error) {
        res.json({message: error.message})
    }
}

