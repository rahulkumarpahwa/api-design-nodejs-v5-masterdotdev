import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'users' })
})

userRouter.get("/:id", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'got user' })
})

userRouter.put("/:id", (req, res) => {
    res.status(201).json({ status: 'ok', message: 'updated user' })
})

userRouter.delete("/:id", (req, res) => {
    res.status(204).json({ status: 'ok', message: 'deleted user' })
})