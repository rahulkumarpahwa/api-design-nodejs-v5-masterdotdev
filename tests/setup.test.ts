import { gethashedPassword } from '../src/utils/passwords.ts';
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

// Tests a single function in isolation
test('hashPassword should return hashed string', () => {
  const hashed = gethashedPassword('mypassword');
  expect(hashed).not.toBe('mypassword');
  expect(hashed).toMatch(/^\$2[ayb]\$.{56}$/);
});
