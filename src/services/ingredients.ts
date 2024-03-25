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
    messages: {}

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

    return { status: 200, messages: newIngredients }

}


export const allIngredients = async function (): Promise<IfunctionsReturns> {
    const ingredients = await Ingredients.find()
    return { status: 200, messages: ingredients }

}

export const getIngredientById = async function (id: string): Promise<IfunctionsReturns> {
    try {
        const ingredient = await Ingredients.findById({ _id: id })
        return { status: 200, messages: ingredient }
    } catch (error) {
        return { status: 400, messages: "incorrect id" }
    }
}



export const updateIngredient = async function (id: string, data: IupdateIngredient): Promise<IfunctionsReturns> {
    const updateData: { name?: string, group?: string, unit?: string, price?: number, critical?: number } = {}
    for (const key in data) {
        if (data[key]) {
            updateData[key] = data[key]
        }
    }

    try {
        await Ingredients.findOneAndUpdate({ _id: id }, { $set: updateData })

        const ingredient = await Ingredients.findById({ _id: id })
        return { status: 200, messages: ingredient }
    } catch (error) {
        return { status: 400, messages: "incorrect id" }
    }
}