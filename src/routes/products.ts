import express, { Router } from "express"
import { validationProduct, validationUpdateProduct } from "../middlewares/validations/validationProduct"
import { addProducts, getProducts, getProduct, productUpdate } from "../controllers/products"

const route: Router = express.Router()


/**
 * @swagger
 * tags:
 *   name: products
 *   description: The products managing API
 * /products:
 *   get:
 *     summary: Lists all the products
 *     tags: [products]
 *     parameters:
 *      - in: query
 *        name: category
 *        description: This is the category
 *        required: false
 *        schema:
 *          type: string
 *          example: salat
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 * 
 *   post:
 *     summary: Create a new product
 *     tags: [products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createProduct'
 *     responses:
 *       200:
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       400:
 *         description: Invalid name, category, ingredients or price 
 * 
 * /products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       404:
 *         description: The product was not found
 *  
 *   put:
 *    summary: Update the product by the id
 *    tags: [products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/createProduct'
 *    responses:
 *      200:
 *        description: The product  updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      400:
 *        description: Invalid name, category,ingredients or price  
 *  
 */

route.get('/products', getProducts)
route.post('/products', validationProduct, addProducts)
route.get('/products/:id', getProduct)
route.put('/products/:id', validationUpdateProduct, productUpdate)


export default route