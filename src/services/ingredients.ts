import Ingredients from "../models/ingredients";



interface Iingredients {
    name: string,
    group: string,
    unit: string,
    price: number,
    critical: number
}

interface IupdateIngredient {
    name?: string,
    group?: string,
    unit?: string,
    price?: number,
    critical?: number
}


interface IfunctionsReturns {
    status: number,
    messages: {
        message: {}
    }
}


export const createIngredients = async function (data: Iingredients): Promise<IfunctionsReturns> {
    const { name, group, unit, price, critical } = data

    const newIngredients = new Ingredients()
    newIngredients.name = name,
        newIngredients.group = group,
        newIngredients.unit = unit,
        newIngredients.price = price,
        newIngredients.critical = critical,

        newIngredients.save()

    return { status: 200, messages: { message: newIngredients } }

}


export const allIngredients = async function (): Promise<IfunctionsReturns> {
    const ingredients = await Ingredients.find()
    return { status: 200, messages: { message: ingredients } }

}

export const getIngredientById = async function (id: string): Promise<IfunctionsReturns> {
    const ingredient = await Ingredients.findById({ _id: id })
    return { status: 200, messages: { message: ingredient } }
}



export const updateIngredient = async function (id: string, data: IupdateIngredient): Promise<IfunctionsReturns> {
    const updateData: { name?: string, group?: string, unit?: string, price?: number, critical?: number } = {}
    for (const key in data) {
        if (data[key]) {
            updateData[key] = data[key]
        }
    }
    await Ingredients.findOneAndUpdate({ _id: id }, { $set: updateData })

    const ingredient = await Ingredients.findById({ _id: id })
    return { status: 200, messages: { message: ingredient } }
}