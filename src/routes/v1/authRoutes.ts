import { Router } from "express";
import { validateBody } from "../../middleware/validation.ts";
import { insertUserSchema } from "../../db/schema.ts";
import { login, register } from "../../controllers/authController.ts";
import { LoginSchema } from "../../schemas/authSchema.ts";

export const authRouter = Router();

authRouter.post("/register", validateBody(insertUserSchema), register)

authRouter.post("/login", validateBody(LoginSchema), login)