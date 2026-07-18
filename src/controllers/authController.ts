import type { Request, Response } from "express";
import { comparePassword, gethashedPassword } from "../utils/passwords.ts";
import db from "../db/connection.ts";
import { users, type NewUser, type User } from "../db/schema.ts";
import { generateJWT } from "../utils/jwt.ts";
import { eq } from "drizzle-orm";
import type { Login } from "../schemas/authSchema.ts";


export const register = async (req: Request<{}, {}, NewUser>, res: Response<{ message: string, user: Omit<NewUser, "updatedAt" | "password">, token: string } | { message: string, error: any }>) => {
    try {
        const { email, username, password, firstName, lastName } = req.body;
        const hashedPassword = await gethashedPassword(password);
        const [newUser] = await db.insert(users).values({
            email: email,
            username: username,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        }).returning({
            id: users.id,
            email: users.email,
            username: users.username,
            firstName: users.firstName,
            lastName: users.lastName,
            createdAt: users.createdAt,
        })

        const token = await generateJWT({
            username, email, id: newUser.id
        });
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
            token,  // User is logged in immediately
        })
    } catch (error: any) {
        console.log(`Resgitration Error : ${error.message}`)
        res.status(500).json({ message: "Registration Failed", error })
    }
}

export const login = async (req: Request<{}, {}, Login>, res: Response<{ message: string, token: string, user: Omit<User, "password" | "updatedAt"> } | { message?: string, error?: any }>) => {
    try {
        const { email, password } = req.body;
        const [user] = await db.select({
            id: users.id,
            email: users.email,
            password: users.password,
            username: users.username,
            firstName: users.firstName,
            lastName: users.lastName,
            createdAt: users.createdAt,
        }).from(users).where(eq(users.email, email)).limit(1);
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials", })
        }

        const isValidPassword = await comparePassword(password, user.password)

        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        const token = await generateJWT({
            username: user.username,
            email,
            id: user.id
        })

        res.status(201).json({
            message: "User Login Successfully",
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                createdAt: user.createdAt,
            }
        })

    } catch (error: any) {
        console.log(`Login Error : ${error.message}`)
        res.status(500).json({ message: "Login Failed", error })
    }
}