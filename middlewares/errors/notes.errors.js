
import { validationResult } from "express-validator"

export const ValidationResponse = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(error){
        res.json({error: error.message})
    }
} 
