import { Request, Response } from "express"
import { createProducts, allPoducts, getProductById, updateProduct } from "../services/products"

export const addProducts = async function (req: Request, res: Response) {
    try {
        const newProduct = await createProducts(req.body)
        res.status(newProduct.status).send(newProduct.messages)
    } catch (error) {
        res.send(error)
    }
}


export const getProducts = async function (req: Request, res: Response) {
    try {
        const products = await allPoducts(req.query.category as string)
        res.status(products.status).send(products.messages)
    } catch (error) {
        res.send(error)
    }
}



export const getProduct = async function (req: Request, res: Response) {
    try {
        const product = await getProductById(req.params.id)
        res.status(product.status).send(product.messages)
    } catch (error) {
        res.send(error)
    }
}


export const productUpdate = async function (req: Request, res: Response) {
    try {
        const product = await updateProduct(req.params.id, req.body)
        res.status(product.status).send(product.messages)
    } catch (error) {
        res.send(error)
    }
}
