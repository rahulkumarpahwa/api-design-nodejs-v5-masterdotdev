import { Router } from "express";
import { validateBody } from "../../middleware/validation.ts";
import { login, register } from "../../controllers/authController.ts";
import { LoginSchema, RegisterSchema } from "../../schemas/authSchema.ts";

export const authRouter = Router();

authRouter.post("/register", validateBody(RegisterSchema), register)

authRouter.post("/login", validateBody(LoginSchema), login)