import express, { Express, Request, Response, Router } from "express"


const route: Router = express.Router()



route.get('/ingredients')
route.post('/ingredients')
route.get('/ingredients/:id')
route.put('/ingredients/:id')
