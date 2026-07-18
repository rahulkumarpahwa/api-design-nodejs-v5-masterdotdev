import type { Response } from 'express'
import type { AuthenticatedRequest } from '../middleware/auth.ts'
import db from '../db/connection.ts'
import { habits, habitTags } from '../db/schema.ts'
import { and, desc, eq } from 'drizzle-orm'
import { type HabitUpdate } from '../schemas/habitSchema.ts'

export const createHabit = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, description, frequency, targetCount, tagIds } = req.body

    const userId = req.user!.id

    const result = await db.transaction(async (tx) => {
      const [newHabit] = await tx
        .insert(habits)
        .values({
          userId,
          name,
          description,
          frequency,
          targetCount,
        })
        .returning()

      if (tagIds && tagIds.length > 0) {
        const habitTagsData: {
          tagId: string
          habitId: string
        }[] = tagIds.map((tagId: string) => {
          return {
            tagId: tagId,
            habitId: newHabit.id,
          }
        })

        await tx.insert(habitTags).values(habitTagsData)
      }
      return newHabit
    })

    res
      .status(201)
      .json({ message: 'Habit Created Successfully', Habit: result })
  } catch (error: any) {
    console.log('Habit Creation Error : ', error.message)
    res.status(500).json({ error: `Habit Creation Error : ${error.message}` })
  }
}

export const getUserHabits = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.id

    const userHabitsWithTags = await db.query.habits.findMany({
      where: eq(habits.userId, userId),
      with: {
        habitTags: {
          with: {
            tag: true,
          },
        },
      },
      orderBy: [desc(habits.createdAt)],
    })

    const habitWithTags = userHabitsWithTags.map((habit) => ({
      ...habit,
      tags: habit.habitTags.map((ht) => ht.tag),
      habitTags: undefined, // removing the habitTags from the habit obj when stringify over the json response as the json() will remove the undefined values from the obj and put in the different array
    }))

    res.json({ habitWithTags })
  } catch (error: any) {
    console.log('Getting User Habits Error : ', error.message)
    res
      .status(500)
      .json({ error: `Getting User Habits Error : ${error.message}` })
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
 */

export const updateUserHabit = async (
  req: AuthenticatedRequest<{ tagIds: string[] } & HabitUpdate, { id: string }>,
  res: Response,
) => {
  try {
    const userId = req.user!.id
    const id = req.params.id
    const { tagIds, ...updates } = req.body // since we are taking the tagsIds to add the new tags in the update we put them in the request body.

    const result = await db.transaction(async (tx) => {
      const [updatedHabit] = await tx
        .update(habits)
        .set({ ...updates, updatedAt: new Date(Date.now()) })
        .where(and(eq(habits.id, id), eq(habits.userId, userId)))
        .returning()

      if (!updatedHabit) {
        // when no such habit exist to update then drizzle returns the undefined.
        return res.status(401).end() // error can be either no such habit found, or the user id may not match so we will return nothing and just end.
      }

      if (tagIds !== undefined) {
        // when tagIds exist we will associate them with the habit.
        await tx.delete(habitTags).where(eq(habitTags.habitId, updatedHabit.id)) // delete the old ones before updating the new ones. otherwise will not change

        if (tagIds.length > 0) {
          const habitTagsValues = tagIds.map((tagId) => ({
            tagId,
            habitId: id,
          })) // this will array of obj's of the each obj with tagId and habitId

          await tx.insert(habitTags).values(habitTagsValues)
        }
      }

      return updatedHabit
    })

    res
      .status(201)
      .json({ message: 'Habit Updated Successfully', habit: result })
  } catch (error: any) {
    console.log('Update User Habit Error : ', error.message)
    res
      .status(500)
      .json({ error: `Update User Habit Error : ${error.message}` })
  }
}

export const getUserHabitById = async (
  req: AuthenticatedRequest<{}, { id: string }>,
  res: Response,
) => {
  try {
    const id: string = req.params.id // habit id
    const userHabitWithTags = await db.query.habits.findFirst({
      where: eq(habits.id, id),
      with: {
        habitTags: {
          with: {
            tag: true,
          },
        },
      },
    })

    res.status(200).json({ userHabitWithTags })
  } catch (error: any) {
    console.log('Update User Habit Error : ', error.message)
    res
      .status(500)
      .json({ error: `Update User Habit Error : ${error.message}` })
  }
}

// NOTE : Try finishing the other routes on you own!