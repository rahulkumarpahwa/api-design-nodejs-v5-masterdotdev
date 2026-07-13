import { pgTable, uuid, varchar, text, timestamp, boolean, integer } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import z from "zod"

// Another way to think of it: Drizzle has two separate APIs for queries - an SQL-like API and a relational API. The SQL-like API doesn't require defining - you can write queries that look like SQL with just the core schema. However, you must define relations to use the relational API, which offers Prisma-like syntax that abstracts the SQL away completely with methods like findOne or findMany.

// NOTE : please check for the sapces in the name of the fields here defined in string below to store in DB has not space.


export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    firstName: varchar('first_name', { length: 255 }),
    lastName: varchar('last_name', { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const habits = pgTable("habits", {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    description: text('description'),
    frequency: varchar('frequency', { length: 20 }).notNull(),
    targetCount: integer('target_count').default(1),
    isActive: boolean('is_active').default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const entries = pgTable("entries", {
    id: uuid('id').primaryKey().defaultRandom(),
    habitId: uuid('habit_id').references(() => habits.id, { onDelete: 'cascade' }).notNull(),
    completionDate: timestamp('completion_date').defaultNow().notNull(),
    note: text('note'),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const tags = pgTable('tags', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 50 }).notNull(),
    color: varchar('color', { length: 7 }).default('#6b7280'),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const habitTags = pgTable('habitTags', {
    id: uuid('id').primaryKey().defaultRandom(),
    habitId: uuid('habit_id').references(() => habits.id, { onDelete: 'cascade' }).notNull(),
    tagId: uuid('tag_id').references(() => tags.id, { onDelete: 'cascade' }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const userRelations = relations(users, ({ many }) => ({
    habits: many(habits)
}))

export const habitRelations = relations(habits, ({ one, many }) => ({
    user: one(users, {
        fields: [habits.userId],
        references: [users.id],
    }),
    entries: many(entries),
    habitTags: many(habitTags)
}))

export const entriesRelations = relations(entries, ({ one }) => ({
    habit: one(habits, {
        fields: [entries.habitId],
        references: [habits.id]
    })
}))

export const tagsRelations = relations(tags, ({ many }) => ({
    habitTags: many(habitTags),
}))

export const habitTagsRelation = relations(habitTags, ({ one }) => ({
    habit: one(habits, {
        fields: [habitTags.habitId],
        references: [habits.id]
    }),
    tag: one(tags, {
        fields: [habitTags.tagId],
        references: [tags.id]
    })
}))

export type User = typeof users.$inferSelect // for selecting the checks will be according for the values.
export type NewUser = typeof users.$inferInsert // for inserting the checks will be according for the values.

export type Habit = typeof habits.$inferSelect
export type Entry = typeof entries.$inferSelect
export type Tag = typeof tags.$inferSelect
export type HabitTag = typeof habitTags.$inferSelect

export const insertUserSchema = createInsertSchema(users) // This creates a Zod schema for inserting a new user into the database. It will validate the input data against the defined structure of the `users` table, ensuring that all required fields are present and correctly formatted before attempting to insert the data into the database.
export const selectUserSchema = createSelectSchema(users) // This creates a Zod schema for selecting a user from the database. It will validate the output data against the defined structure of the `users` table, ensuring that the data retrieved from the database matches the expected format.
export const insertHabitSchema = createInsertSchema(habits)