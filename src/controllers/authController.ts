import type { Request, Response } from "express";
import { gethashedPassword } from "../utils/passwords.ts";
import db from "../db/connection.ts";
import { users, type NewUser } from "../db/schema.ts";
import { generateJWT } from "../utils/jwt.ts";


export const register = async (req: Request<{}, {}, NewUser>, res: Response) => {
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
        return;
    } catch (error : any) {
        console.log(`Resgitration Error : ${error}`)
        console.error(error);
        console.error(error.message);
        console.error(error.cause);
        console.error(error.stack);
        res.status(500).json({ message: "Registration Failed", error })
        return;
    }
}