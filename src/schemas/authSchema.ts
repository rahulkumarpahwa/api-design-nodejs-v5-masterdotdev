import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(8, 'Too short!').nonempty(),
})

export const RegisterSchema = z.object({
  email: z.email().nonempty(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .refine((val) => /[A-Z]/.test(val), 'Must contain an uppercase letter')
    .refine((val) => /[a-z]/.test(val), 'Must contain a lowercase letter')
    .refine((val) => /[0-9]/.test(val), 'Must contain a number')
    .refine(
      (val) => /[!@#$%^&*]/.test(val),
      'Must contain a special character',
    ).nonempty(),
  username: z.string().min(5, 'Too short username!').nonempty(),
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
})

export type Login = z.infer<typeof LoginSchema>
export type Register = z.infer<typeof RegisterSchema>