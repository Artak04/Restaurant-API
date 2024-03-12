import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name: { type: String },
    category: { type: String },
    ingredients: { type: Array },
    price: { type: Number }
})


const Product = mongoose.model("product", product)


export default Product 