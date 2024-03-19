import express, { Router } from "express"
import { addIngredients, getIngredients, getIngredient, ingredientUpdate } from "../controllers/ingredients"
import { validationIngredients, validationUpdateIngredient } from "../middlewares/validations/validationIngredients"

const route: Router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: The ingredients managing API
 * /ingredients:
 *   get:
 *     summary: Lists all the ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 */

route.get('/ingredients', getIngredients)
route.post('/ingredients', validationIngredients, addIngredients)
route.get('/ingredients/:id', getIngredient)
route.put('/ingredients/:id', validationUpdateIngredient, ingredientUpdate)



export default route