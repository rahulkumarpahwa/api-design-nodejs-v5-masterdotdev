import { z } from "zod";


export const LoginSchema = z.object({
    email: z.email().nonempty(),
    password: z.string().min(5, "Too short!").nonempty()
}) 