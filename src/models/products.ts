import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name: { type: String },
    category: { type: String },
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
    price: { type: Number }
})


const Product = mongoose.model("Product", product)


export default Product 