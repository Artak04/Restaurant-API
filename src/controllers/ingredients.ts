import { createIngredients, allIngredients, getIngredientById, updateIngredient } from "../services/ingredients"
import { Request, Response } from "express"


export const addIngredients = async function (req: Request, res: Response) {
    try {
        const newIngredient = await createIngredients(req.body)
        res.status(newIngredient.status).send(newIngredient.messages)
    } catch (error) {
        res.send(error)
    }
}

export const getIngredients = async function (req: Request, res: Response) {
    try {
        const ingredients = await allIngredients()
        res.status(ingredients.status).send(ingredients.messages)
    } catch (error) {
        res.send(error)
    }
}

export const getIngredient = async function (req: Request, res: Response) {
    try {
        const ingredient = await getIngredientById(req.params.id)
        res.status(ingredient.status).send(ingredient.messages)
    } catch (error) {
        res.send(error)
    }
}



export const ingredientUpdate = async function (req: Request, res: Response) {
    try {
        const ingredient = await updateIngredient(req.params.id, req.body)
        res.status(ingredient.status).send(ingredient.messages)
    } catch (error) {
        res.send(error)
    }
}




