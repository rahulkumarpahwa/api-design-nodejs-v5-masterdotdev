import type { Request, Response } from "express";


export const register = (req: Request, res: Response): void => {
    try {

    } catch (e) {
        console.log(`Resgitration Error : ${e}`)
        res.status(500).json({ message: "Registration Failed", error: e })
        return;
    }
}