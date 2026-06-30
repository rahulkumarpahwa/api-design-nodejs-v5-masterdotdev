import type { Request, Response, NextFunction } from 'express';
import { type ZodType, ZodError } from 'zod';

export const validateBody = (schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData; // The reason we reassign it back is because.Maybe this schema has like defaults on it,maybe it has coercions on it that modify the body,so we don't, and the result of parsing that schema would be.
            // It would include those modifications so we would want to attach that to the body to really be truthfulto the schema, whereas if we just, we could just call next here and not attached to the body becausethe body that's on there was already validated, but then if again if that schema had coercions or defaultson it would not have those modifications and then you would run into your expectations will not lineup with what was actually happening.So we want to reattach it.
            next(); // to next middleware / handler
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    error: 'Validation Failed',
                    details: e.issues.map(err => ({
                        field: err.path.join("."),
                        message: err.message
                    }))
                })
            }

            // If the error is not a ZodError, pass to next error middleware hanlder
            next(e);
        }
    }
}