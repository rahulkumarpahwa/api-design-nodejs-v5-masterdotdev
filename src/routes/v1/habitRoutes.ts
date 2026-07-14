import { Router } from "express";
import { validateBody, validateParams } from "../../middleware/validation.ts";
import { z } from "zod";
import { authenticateToken } from "../../middleware/auth.ts";
import { insertHabitSchema } from "../../db/schema.ts";
import { createHabit, getUserHabits } from "../../controllers/habitController.ts";

// just the test schema
const completeParansSchema = z.object({
    id: z.string().max(4)
})

export const createHabitSchema = insertHabitSchema.extend({ tagIds: z.array(z.string()).optional(), });



export const habitRouter = Router();


habitRouter.use(authenticateToken)


habitRouter.get("/", getUserHabits)

habitRouter.get("/:id", (req, res) => {
    res.status(200).json({ status: 'ok', message: 'got one habit' })
})

habitRouter.post("/", validateBody(createHabitSchema), createHabit)


habitRouter.delete("/:id", (req, res) => {
    res.status(204).json({ status: 'ok', message: 'deleted habit' })
})

habitRouter.post("/:id/complete", validateParams(completeParansSchema), validateBody(createHabitSchema), (req, res) => {
    res.status(201).json({ status: 'ok', message: 'completed habit' })
})