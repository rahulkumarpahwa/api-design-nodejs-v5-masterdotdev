import {
  createTestUser,
  createTestHabit,
  cleanUpDatabase,
} from '../tests/setup/dbHelpers.ts'

describe('Test Setup', () => {
  test('test should connect to TEST DB', async () => {
    const { user, token } = await createTestUser()

    expect(user).toBeDefined()
    await cleanUpDatabase()
  })
})
