import express, { Express } from "express"
import "dotenv/config"
import mongoose from "mongoose"
import productRoutes from "./routes/products"
import config from "./config/config"
import ingredientRoutes from "../src/routes/ingredients"

const app: Express = express()

const port: number = config.port
const mongoUrl: string = config.mongoUrl

app.use(express.json())
app.use(productRoutes, ingredientRoutes)

app.listen(port, (): void => { console.log(`Server is open on ${port} port`) })

mongoose.connect(mongoUrl).then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database:', err));
