import request from 'supertest'
import app from '../src/server.ts'
import { env } from '../env.ts'
import {
  cleanUpDatabase,
  createTestHabit,
  createTestUser,
} from './setup/dbHelpers.ts'

describe('Authentication Endpoints', async () => {
  afterEach(async () => {
    // Runs after each test, whether the test passes or fails.
    await cleanUpDatabase()
  })

  // REGISTER TEST CASES:

  describe('POST /api/v1/auth/register', async () => {
    //----------------------------------------------------------
    test('should register a new user with valid data', async () => {
      const userData = {
        email: `test-${Date.now()}-${Math.random()}@example.com`,
        password: 'test@Password123',
        username: `testuser-${Date.now()}-${Math.random()}`,
        firstName: 'Test',
        lastName: 'User',
      }

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(userData)
        .expect(201)

      expect(response.body).toHaveProperty(
        'message',
        'User created successfully',
      )

      expect(response.body).toHaveProperty('token')
      expect(response.body.user).not.toHaveProperty('password')
    })
    //----------------------------------------------------------
    it('should return 400 for invalid email', async () => {
      // it() is alias for the test() and can be used alternatively.
      const userData = {
        email: `invalid-email`,
        password: 'test@Password123',
        username: `testuser-${Date.now()}-${Math.random()}`,
      }

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(userData)
        .expect(400)

      expect(response.body).toHaveProperty('error', 'Validation Failed')
    })
    //----------------------------------------------------------
    test('should return 400 for short password', async () => {
      // it() is alias for the test() and can be used alternatively.
      const userData = {
        email: `test-${Date.now()}-${Math.random()}@example.com`,
        password: 'short',
        username: `testuser-${Date.now()}-${Math.random()}`,
      }

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(userData)
        .expect(400)

      expect(response.body).toHaveProperty('error', 'Validation Failed')
    })
  })

  // LOGIN TEST CASES :

  describe('POST /api/v1/auth/login', async () => {
    //----------------------------------------------------------
    test('should login with valid credentials', async () => {
      // it() is alias for the test() and can be used alternatively.
      const userData = {
        email: `test-${Date.now()}-${Math.random()}@example.com`,
        password: 'test@Password123',
      }

      // we need to register before the login with current credentails:
      const { user, rawPassword } = await createTestUser(userData) // helper method

      const credentails = {
        email: user.email,
        password: rawPassword,
      }

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(credentails)
        .expect(201)

      expect(response.body).toHaveProperty('message', 'User Login Successfully')
      expect(response.body).toHaveProperty('user')
      expect(response.body.user).not.toHaveProperty('password')
      expect(response.body).toHaveProperty('token')
    })

    //----------------------------------------------------------
    it('should return 400 for missing email', async () => {
      const userData = {
        password: 'test@Password123',
      }

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(userData)
        .expect(400)

      expect(response.body).toHaveProperty('error', 'Validation Failed')
    })
    //----------------------------------------------------------

    it('should return 401 for invalid credentials', async () => {
      // first register and then login with wrong password
      const { user } = await createTestUser()

      const credentials = {
        email: user.email, // email will be same but password will keep wrong to check
        password: 'test@WrongPassword123', // but must the validations
      }

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(credentials)
        .expect(401)

      expect(response.body).toHaveProperty('error', 'Invalid credentials')
    })
  })
})
