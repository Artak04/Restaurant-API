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



interface IfunctionsReturns {
    status: number,
    messages: {}

}





export const createProducts = async function (data: Iproduct): Promise<IfunctionsReturns> {
    const { name, category, ingredients, price } = data

    const newProduct = new Product()
    newProduct.name = name,
        newProduct.category = category,
        newProduct.ingredients = ingredients
    newProduct.price = price

    newProduct.save()
    return { status: 200, messages: newProduct }

}


export const allPoducts = async function (data: string):Promise<IfunctionsReturns> {


    if (data) {
        const products = await Product.find({ category: data }).populate('ingredients', 'name group -_id').exec()
        return { status: 200, messages: products }
    }

    const products = await Product.find().populate('ingredients', 'name group -_id').exec()
    return { status: 200, messages: products }

}


export const getProductById = async function (data: string): Promise<IfunctionsReturns> {
    try {
        const product = await Product.findById({ _id: data }).populate('ingredients', 'name group -_id').exec()
        return { status: 200, messages: product }
    } catch (error) {
        return { status: 400, messages: "incorrect id" }
    }

}


export const updateProduct = async function (id: string, data: IupdateProduct): Promise<IfunctionsReturns> {
    const updateData: { name?: string, category?: string, ingredients?: [], price?: number } = {}
    for (const key in data) {
        if (data[key]) {
            updateData[key] = data[key]
        }
    }
    if (updateData.ingredients.length === 0) {
        delete updateData.ingredients
    }

    try {
        await Product.findOneAndUpdate({ _id: id }, { $set: updateData })

        const product = await Product.findById({ _id: id }).populate('ingredients', 'name group -_id').exec()
        return { status: 200, messages: product }
    } catch (error) {
       return  { status: 400, messages: "incorrect product id or ingredient id" }
    }
}