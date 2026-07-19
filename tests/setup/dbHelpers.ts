import { db } from '../../src/db/connection.ts'
import {
  users,
  habits,
  habitTags,
  tags,
  entries,
  NewUser,
  NewHabit,
} from '../../src/db/schema.ts'
import {
  gethashedPassword,
  comparePassword,
} from '../../src/utils/passwords.ts'
import { generateJWT } from '../../src/utils/jwt.ts'

export const createTestUser = async (userData: Partial<NewUser> = {}) => {
  const defaultData = {
    email: `test-${Date.now()}-${Math.random()}@example.com`,
    password: 'test@Password123',
    username: `testuser-${Date.now()}-${Math.random()}`,
    firstName: 'Test',
    lastName: 'User',
    ...userData,
  }

  const hashedPassword = await gethashedPassword(defaultData.password)

  const [user] = await db
    .insert(users)
    .values({
      ...defaultData,
      password: hashedPassword,
      createdAt: new Date(Date.now()),
    })
    .returning()

  const token = await generateJWT({
    username: user.username,
    email: user.email,
    id: user.id,
  })

  return { token, user, rawPassword: defaultData.password }
}

export const createHabit = async (
  userId: string = '',
  habitData: Partial<NewHabit> = {},
) => {
  const defaultData = {
    name: `Test Habit - ${Date.now()}`,
    description: 'A Test Habit',
    frequency: 'daily',
    targetCount: 1,
    ...habitData,
  }

  const [habit] = await db
    .insert(habits)
    .values({ userId, ...defaultData })
    .returning()

  return habit
}

export const cleanUpDatabase = async () =>{
    await db.delete(entries);
    await db.delete(habits);
    await db.delete(users);
    await db.delete(tags);
    await db.delete(habitTags);
}
