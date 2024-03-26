import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export const accessToken = async function (req: Request, res: Response, next: NextFunction) {
    const token = await jwt.decode(req.headers['token'])
    try {
        if (token.Role !== "admin") {
           return  res.status(403).send("Access Forbidden")
        }
        next()
    } catch (error) {
        res.status(500).send(error)
    }

}