import { Request, Response, NextFunction } from "express"
import joi from "joi"


const schemaAdd = joi.object({
    name: joi.string().required().min(5),
    category: joi.string().required().min(5),
    ingredients: joi.array().required(),
    price: joi.number().required()
})


const schemaUpdate =joi.object( {
    name: joi.string().optional().allow(''),
    category: joi.string().optional().allow(''),
    ingredients: joi.array().optional().items(joi.string()),
    price: joi.number().optional()
})

export const validationProduct = async function (req: Request, res: Response, next: NextFunction) {
    try {
        await schemaAdd.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).send({ message: `Invalid name, category,ingredients or price ${error}`  })
    }
}


export const validationUpdateProduct = async function (req:Request,res:Response,next:NextFunction){
    try {
        await schemaUpdate.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).send({ message: `Invalid name, category,ingredients or price ${error}`  })
    }
}


