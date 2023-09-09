/* notes : id(int, not-null), title(string, not-null), content(text, not-null), example(text, null), link(text, null), visitedAt(date, null)  */
import { check } from 'express-validator'

import { ValidationResponse } from '../errors/notes.errors.js'

export const validateNewNote = [
    check('title').notEmpty().isString().escape(),
    check('content').notEmpty().isString().escape(),
    check('example').isString().escape(),
    check('link').isString().escape(),
    check('categoryId').notEmpty().isNumeric().escape(),
    (req,res,next) => { ValidationResponse(req,res,next) }
]
