import express, { Express } from "express"
import "dotenv/config"
import mongoose from "mongoose"

const app: Express = express()

const port: number = +process.env.port || 3005
const mongoUrl: string = process.env.mongoConnectUrl

app.listen(port, (): void => { console.log(`Server is open on ${port} port`) })

mongoose.connect(mongoUrl).then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database:', err));
