import { Router } from "express";
import { validateBody, validateParams } from "../../middleware/validation.ts";
import { z } from "zod";

// just the test schema
const createHabitSchema = z.object({
    name: z.string(),
})
// just the test schema
const completeParansSchema = z.object({
    id: z.string().max(4)
})

export const habitRouter = Router();

habitRouter.get("/", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'habits' })
})

habitRouter.get("/:id", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'got one habit' })
})

habitRouter.post("/", validateBody(createHabitSchema), (req, res) => {
    res.status(201).json({ status: 'ok', message: 'created habit' })
})


habitRouter.delete("/:id", (req, res) => {
    res.status(204).json({ status: 'ok', message: 'deleted habit' })
})

habitRouter.post("/:id/complete", validateParams(completeParansSchema), validateBody(createHabitSchema), (req, res) => {
    res.status(201).json({ status: 'ok', message: 'completed habit' })
})