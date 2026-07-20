import { db } from '../../src/db/connection.ts'
import { users, habits, entries, habitTags, tags } from '../../src/db/schema.ts'
import { sql } from 'drizzle-orm'
import { execSync } from 'child_process'

export default async function setup() {
  console.log('Setting Up the TEST DB')
  try {
    await db.execute(sql`DROP TABLE IF EXISTS ${entries} CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS ${habitTags} CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS ${habits} CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS ${users} CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS ${tags} CASCADE`)

    console.log(process.env.DATABASE_URL)

    console.log('Pushing Schema using Drizzle Kit...')
    execSync(
      // this will run a child process in terminal.
      `npx drizzle-kit push --url="${process.env.DATABASE_URL}" --schema="./src/db/schema.ts" --dialect=postgresql`, // directly pushing the schema to the cloud test database.
      { encoding: 'utf8', stdio: 'pipe', cwd: process.cwd() },
    )

    console.log('Test DB Created')

    // returning the Clean DB method, which will used after every test case.
    return async () => {
      try {
        await db.execute(sql`DROP TABLE IF EXISTS ${entries} CASCADE`)
        await db.execute(sql`DROP TABLE IF EXISTS ${habitTags} CASCADE`)
        await db.execute(sql`DROP TABLE IF EXISTS ${habits} CASCADE`)
        await db.execute(sql`DROP TABLE IF EXISTS ${users} CASCADE`)
        await db.execute(sql`DROP TABLE IF EXISTS ${tags} CASCADE`)
        process.exit(0)
      } catch (e) {
        console.log('Failed to clear Test DB :', e)
        throw e
      }
    }
  } catch (error: any) {
    console.log(error.message)
    console.log('Failed to create Test DB')
    throw error
  }
}
