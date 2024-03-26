import express, { Express } from "express"
import "dotenv/config"
import mongoose from "mongoose"
import productRoutes from "./routes/products"
import config from "./config/config"
import ingredientRoutes from "../src/routes/ingredients"
import swaggerUI from "swagger-ui-express"
import { specs } from "./config/swagger"
import { seed } from "./models/seeder"

const app: Express = express()

const port: number = config.port
const mongoUrl: string = config.mongoUrl

app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(productRoutes, ingredientRoutes)

app.listen(port, (): void => { console.log("Server is open on http://localhost:3005/api-docs ") })

mongoose.connect(mongoUrl).then(() => { console.log('Database connected'); return seed() })
    .catch(err => console.error('Error connecting to database:', err));
