import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.ts";
import db from "../db/connection.ts";
import { habits, habitTags } from "../db/schema.ts";
import { desc, eq } from "drizzle-orm";


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

export const getUserHabits = async (req: AuthenticatedRequest, res: Response) => {

    try {
        const userId = req.user!.id

        const userHabitsWithTags = await db.query.habits.findMany({
            where: eq(habits.userId, userId),
            with: {
                habitTags: {
                    with: {
                        tag: true,
                    }
                }
            }, orderBy: [desc(habits.createdAt)],
        })


        const habitWithTags = userHabitsWithTags.map(habit => (
            {
                ...habit,
                tags: habit.habitTags.map(ht => ht.tag),
                habitTags: undefined, // removing the habitTags from the habit obj and put in the different array 
            }
        ))

        res.json({ habitWithTags })
    } catch (error: any) {
        console.log("Getting User Habit Error : ", error.message);
        res.status(500).json({ error: `Getting User Habit Error : ${error.message}` })
    }

}

/**
 * CONTENT NOTE :

Here is the equivalent query in Drizzle that uses sql-like syntax:

const allHabits = await db.select()
  .from(habits) 
  .leftJoin(habitTags, eq(habits.id, habitTags.habitId)) 
  .leftJoin(tags, eq(habitTags.tagId, tags.id)) 
  .where(eq(habits.userId, userId));

Here is a solution to create a column in the result set with an array of rows collapsed by the group by:

const allHabits = await db .select({ habit: habits, tags: sqlarray_agg(${tags}), }) 
  .from(habits) 
  .leftJoin(habitTags, eq(habits.id, habitTags.habitId)) 
  .leftJoin(tags, eq(habitTags.tagId, tags.id)) 
  .where(eq(habits.userId, userId)) 
  .groupBy(habits.id) 
  .orderBy(desc(habits.createdAt));

 * 
 * 
 */