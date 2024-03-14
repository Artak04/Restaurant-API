import mongoose, { Schema } from "mongoose";

const ingredients = new Schema({
    name: { type: String },
    group: { type: String },
    unit: { type: String },
    price: { type: Number },
    critical: { type: Number }
})



const Ingredients = mongoose.model("ingredients", ingredients)


export default Ingredients