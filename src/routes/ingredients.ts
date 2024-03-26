import express, { Router } from "express"
import { addIngredients, getIngredients, getIngredient, ingredientUpdate } from "../controllers/ingredients"
import { validationIngredients, validationUpdateIngredient } from "../middlewares/validations/validationIngredients"
import { accessToken } from "../middlewares/tokenAccess"

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
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token 
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *       403:
 *         description: Access forbidden. Admin privileges required
 * 
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createIngredient'
 *     responses:
 *       200:
 *         description: The created ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createIngredient'
 *       400:
 *         description: Invalid name, group,unit, price or critical
 *       403:
 *         description: Access forbidden. Admin privileges required 
 * 
 * /ingredients/{id}:
 *   get:
 *     summary: Get the ingredient by id
 *     tags: [Ingredients] 
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token  
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingrdient id
 *     responses:
 *       200:
 *         description: The ingredient response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: The ingredient was not found
 *       403:
 *         description: Access forbidden. Admin privileges required 
 * 
 *   put:
 *    summary: Update the ingredient by the id
 *    tags: [Ingredients]
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token    
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/createIngredient'
 *    responses:
 *      200:
 *        description: The ingredient  updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingredient'
 *      400:
 *        description: Invalid name, group,unit,  price or critical
 *      403:
 *        description: Access forbidden. Admin privileges required 
 */

route.get('/ingredients', accessToken, getIngredients)
route.post('/ingredients', accessToken, validationIngredients, addIngredients)
route.get('/ingredients/:id', accessToken, getIngredient)
route.put('/ingredients/:id', accessToken, validationUpdateIngredient, ingredientUpdate)



export default route