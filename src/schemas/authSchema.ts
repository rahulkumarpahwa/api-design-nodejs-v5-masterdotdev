import { z } from "zod";


export const LoginSchema = z.object({
    email: z.email().nonempty(),
    password: z.string().min(5, "Too short!").nonempty()
}) 

export type Login = z.infer<typeof LoginSchema>