import express, { Express, Request, Response, Router } from "express"

const route: Router = express.Router()


route.get('/products')
route.post('/products')
route.get('/products/:id')
route.put('/products/:id')
