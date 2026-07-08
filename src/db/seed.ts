import { fileURLToPath } from "node:url";
import { db } from "../db/connection.ts"
import { users, habits, habitTags, entries, tags } from "../db/schema.ts"

export const seed = async () => {
    // Your seeding logic here
    console.log("Seeding the database...");

    try {
        db.delete(users);
        db.delete(habits);
        db.delete(tags);
        db.delete(entries);
        db.delete(habitTags);

        const [demoUser] = await db.insert(users).values({
            email: "demo@demo.com",
            username: "demo",
            password: "demoPassword@123",
            firstName: "demo",
            lastName: "User",
        }).returning()

        const [demoHabit] = await db.insert(habits).values({
            userId: demoUser.id,
            name: "Jogging",
            description: "Running slow",
            frequency: "everyday",
            targetCount: 1,
            isActive: true,
        }).returning()

        const [demoTag] = await db.insert(tags).values({
            name: "Health Tag",
            color: "#78b098"
        }).returning()

        await db.insert(habitTags).values({
            habitId: demoHabit.id,
            tagId: demoTag.id
        })

        // adding the entries:
        const date = new Date(Date.now());
        date.setHours(12, 0, 0, 0);

        for (let i = 0; i < 7; i++) {
            const d = new Date(date);
            d.setDate(d.getDate() - i);

            await db.insert(entries).values({
                habitId: demoHabit.id,
                completionDate: d,
                note: `Note of Date: ${i + 1}`,
            })
        }

        console.log(`Seed Ended!`)

    } catch (error) {
        console.error("Error seeding the database:", error);
    }

}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    seed()
        .then(() => {
            console.log(`Seed Created!`);
            process.exit(0); // Clean exit
        })
        .catch((error) => {
            console.error(`Seed Error : ${error}`);
            process.exit(1); // Error exit
        });
}

export default seed;
