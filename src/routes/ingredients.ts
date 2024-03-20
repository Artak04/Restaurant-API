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
 * 
 * 
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
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
 * 
 * /ingredients/{id}:
 *   get:
 *     summary: Get the ingredient by id
 *     tags: [Ingredients]
 *     parameters:
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
 * 
 *   put:
 *    summary: Update the ingredient by the id
 *    tags: [Ingredients]
 *    parameters:
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
 */

route.get('/ingredients', getIngredients)
route.post('/ingredients', validationIngredients, addIngredients)
route.get('/ingredients/:id', getIngredient)
route.put('/ingredients/:id', validationUpdateIngredient, ingredientUpdate)



export default route