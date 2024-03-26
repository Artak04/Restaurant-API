import express, { Router } from "express"
import { validationProduct, validationUpdateProduct } from "../middlewares/validations/validationProduct"
import { addProducts, getProducts, getProduct, productUpdate } from "../controllers/products"
import { accessToken } from "../middlewares/tokenAccess"

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
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token  
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
 *       403:
 *         description: Access forbidden. Admin privileges required 
 * 
 *   post:
 *     summary: Create a new product
 *     tags: [products]
 *     parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token   
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
 *       403:
 *         description: Access forbidden. Admin privileges required 
 * 
 * /products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [products]
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
 *       403:
 *         description: Access forbidden. Admin privileges required 
 *  
 *   put:
 *    summary: Update the product by the id
 *    tags: [products]
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
 *      403:
 *        description: Access forbidden. Admin privileges required  
 *  
 */

route.get('/products',accessToken, getProducts)
route.post('/products',accessToken, validationProduct, addProducts)
route.get('/products/:id',accessToken, getProduct)
route.put('/products/:id',accessToken, validationUpdateProduct, productUpdate)


export default route