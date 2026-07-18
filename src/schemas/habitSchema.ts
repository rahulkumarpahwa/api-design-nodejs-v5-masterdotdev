import z from "zod";

export const habitUpdateSchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    frequency: z.string().max(20).nonempty(),
    targetCount: z.number().min(1).default(1),
    isActive: z.boolean().default(true)
})

export type HabitUpdate = z.infer<typeof habitUpdateSchema>