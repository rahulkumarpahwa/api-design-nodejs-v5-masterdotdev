import {
  createTestUser,
  createTestHabit,
  cleanUpDatabase,
} from './dbHelpers'

describe('Test Setup', () => {
  test('test should connect to TEST DB', async () => {
    const { user, token } = await createTestUser()

    expect(user).toBeDefined()
    await cleanUpDatabase()
  })
})
