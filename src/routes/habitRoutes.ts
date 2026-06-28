import { Router } from "express";

export const habitRouter = Router();

habitRouter.get("/", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'habits' })
})

habitRouter.get("/:id", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'got one habit' })
})

habitRouter.post("/", (req, res) => {
    res.status(201).json({ status: 'ok', message: 'created habit' })
})


habitRouter.delete("/:id", (req, res) => {
    res.status(204).json({ status: 'ok', message: 'deleted habit' })
})

habitRouter.post("/:id/complete", (req, res) => {
    res.status(201).json({ status: 'ok', message: 'completed habit' })
})