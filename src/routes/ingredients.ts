import express, { Router } from "express"
import { addIngredients, getIngredients, getIngredient, ingredientUpdate } from "../controllers/ingredients"
import { validationIngredients, validationUpdateIngredient } from "../middlewares/validations/validationIngredients"

const route: Router = express.Router()



route.get('/ingredients', getIngredients)
route.post('/ingredients', validationIngredients, addIngredients)
route.get('/ingredients/:id', getIngredient)
route.put('/ingredients/:id', validationUpdateIngredient, ingredientUpdate)



export default route