import {Router} from "express";
import { authRouter } from "./authRoutes.ts";
import { habitRouter } from "./habitRoutes.ts";
import { userRouter } from "./userRouter.ts";

export const v1Router = Router();

v1Router.use("/auth", authRouter)
v1Router.use("/habits", habitRouter)
v1Router.use("/users", userRouter)