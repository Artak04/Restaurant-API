import { Request, Response, NextFunction } from "express"
import joi from "joi"


const schemaAdd = joi.object({
    name: joi.string().required().min(3),
    category: joi.string().required().min(3),
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
        return res.status(400).send({ error: `Invalid name, category,ingredients or price ${error}`  })
    }
}


export const validationUpdateProduct = async function (req:Request,res:Response,next:NextFunction){
    try {
        await schemaUpdate.validateAsync(req.body)
        if (req.body.name) {
            if (req.body.name.length <= 2) {
                return res.status(400).send({ error: "at least 3 word name" })
            }
        }
        if (req.body.category) {
            if (req.body.category.length <= 2) {
                return res.status(400).send({ error: "at least 3 word category" })
            }
        }
        next()
    } catch (error) {
        return res.status(400).send({ error: `Invalid name, category,ingredients or price ${error}`  })
    }
}


