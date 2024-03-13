import express, { Router } from "express"
import { validationProduct, validationUpdateProduct } from "../middlewares/validations/validationProduct"
import { addProducts, getProducts, getProduct, productUpdate } from "../controllers/products"

const route: Router = express.Router()


route.get('/products', getProducts)
route.post('/products', validationProduct, addProducts)
route.get('/products/:id', getProduct)
route.put('/products/:id', validationUpdateProduct, productUpdate)


export default route