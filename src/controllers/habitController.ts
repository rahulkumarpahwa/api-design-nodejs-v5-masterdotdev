import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.ts";
import db from "../db/connection.ts";
import { habits, habitTags } from "../db/schema.ts";


export const createHabit = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { name, description, frequency, targetCount, tagIds } = req.body;

        const userId = req.user!.id

        const result = await db.transaction(async (tx) => {
            const [newHabit] = await tx.insert(habits).values({
                userId,
                name, description, frequency, targetCount
            }).returning()

            if (tagIds && tagIds.length > 0) {
                const habitTagsData: {
                    tagId: string,
                    habitId: string
                }[] = tagIds.map((tagId: string) => {
                    return {
                        tagId: tagId,
                        habitId: newHabit.id
                    }
                })

                await tx.insert(habitTags).values(habitTagsData)
            }
            return newHabit;
        })


        res.status(201).json({ message: "Habit Created Successfully", Habit: result })

    } catch (error: any) {
        console.log("Habit Creation Error : ", error.message);
        res.status(500).json({ error: `Habit Creation Error : ${error.message}` })
    }
}