import Product from "../models/products"


interface Iproduct {
    name: string,
    category: string,
    ingredients: [],
    price: number
}


interface IupdateProduct {
    name?: string,
    category?: string,
    ingredients?: [],
    price?: number
}





export const createProducts = async function (data: Iproduct) {
    const { name, category, ingredients, price } = data

    const newProduct = new Product()
    newProduct.name = name,
        newProduct.category = category,
        newProduct.ingredients = ingredients
    newProduct.price = price

    newProduct.save()
    return { status: 200, messages: { message: newProduct } }

}


export const allPoducts = async function (data: string) {

    if (data) {
        const products = await Product.find({ category: data })
        return { status: 200, messages: { products } }
    }

    const products = await Product.find()
    return { status: 200, messages: { products } }

}


export const getProductById = async function (data: string) {
    const product = await Product.findById({ _id: data })
    return { status: 200, messages: { product } }
}


export const updateProduct = async function (id: string, data: IupdateProduct) {
    if (data.name !== "") {
        if (data.name.length <= 5) {
            return { status: 400, messages: { message: "at least 6 word name" } }
        }
        await Product.findOneAndUpdate({ _id: id }, { $set: { name: data.name } })
    }
    if (data.category !== "") {
        if (data.category.length <= 2) {
            return { status: 400, messages: { message: "at least 3 word category" } }
        }
        await Product.findOneAndUpdate({ _id: id }, { $set: { category: data.category } })
    }
    if (data.price !== undefined) {
        await Product.findOneAndUpdate({ _id: id }, { $set: { price: data.price } })
    }
    if(data.ingredients.length !== 0){
        await Product.findOneAndUpdate({ _id: id }, { $set: { ingredients: data.ingredients } })
    }
    

    const product = await Product.findById({ _id: id })
    return { status: 200, messages: { product } }
}