import {Router} from "express";

export const authRouter = Router();

authRouter.post("/register", (req, res)=>{
    res.status(201).json({status : 'ok', message : "user signed up"})
})

authRouter.post("/login", (req, res)=>{
    res.status(201).json({status : 'ok', message : "user logged in"})
})