import { Router } from "express";
import { validateBody } from "../../middleware/validation.ts";
import { insertUserSchema } from "../../db/schema.ts";
import { register } from "../../controllers/authController.ts";

export const authRouter = Router();

authRouter.post("/register", validateBody(insertUserSchema), register)

authRouter.post("/login", (req, res) => {
    res.status(201).json({ status: 'ok', message: "user logged in" })
})