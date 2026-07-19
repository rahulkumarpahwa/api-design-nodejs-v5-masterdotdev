import type { Request, Response, NextFunction } from "express";
import { verifyJWT, type JWTPld } from "../utils/jwt.ts";


export interface AuthenticatedRequest<
    Body = any,
    Params = any,
    Query = any
> extends Request<Params, any, Body, Query> {
    user?: JWTPld;
}

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Bad Request" })
        }
        const payload = await verifyJWT(token);
        req.user = payload;
        next()
    } catch (e) {
        return res.status(403).json({ error: "Forbidden" })
    }
}