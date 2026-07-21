# Habit Tracker API

A RESTful API for tracking daily habits, built with Node.js, Express.js v5, TypeScript, and PostgreSQL.

## 🚀 Features

- **User Authentication** — Register and login with JWT-based authentication
- **Habit Management** — Create, read, update, and delete habits
- **Habit Tagging** — Organize habits with tags (many-to-many relationship)
- **Habit Completion Tracking** — Log daily habit completions with notes
- **Habit Statistics** — Track streaks, completion rates, and progress
- **User Profile Management** — Update profiles and change passwords
- **Robust Validation** — Zod schema validation for all inputs
- **Security** — Password hashing (bcrypt), Helmet, CORS, JWT expiry
- **API Versioning** — Versioned routes (`/api/v1`)
- **Database Migrations** — Drizzle Kit for schema version control
- **Comprehensive Testing** — Integration tests with Vitest + Supertest

## 🛠 Tech Stack

| Technology     | Purpose                           |
| -------------- | --------------------------------- |
| Node.js ≥24.18 | JavaScript runtime                |
| TypeScript     | Type-safe development             |
| Express.js v5  | Web framework                     |
| PostgreSQL     | Relational database               |
| Drizzle ORM    | Type-safe database ORM            |
| Drizzle Kit    | Database migrations & schema push |
| Zod            | Runtime input validation          |
| JWT (jose)     | Authentication tokens             |
| bcrypt         | Password hashing                  |
| Helmet         | Security headers                  |
| Morgan         | HTTP request logging              |
| Vitest         | Testing framework                 |
| Supertest      | HTTP integration testing          |

## 📁 Project Structure

```
api-design-nodejs-v5/
├── src/
│   ├── index.ts                 # Server entry point
│   ├── server.ts                # Express app setup & middleware
│   ├── controllers/
│   │   ├── authController.ts    # Register & login handlers
│   │   └── habitController.ts   # Habit CRUD handlers
│   ├── db/
│   │   ├── connection.ts        # PostgreSQL connection pool
│   │   ├── schema.ts            # Drizzle ORM schema (users, habits, entries, tags, habitTags)
│   │   └── seed.ts              # Database seeding script
│   ├── middleware/
│   │   ├── auth.ts              # JWT authentication middleware
│   │   ├── errorHandler.ts      # Global error handler
│   │   └── validation.ts        # Zod validation middleware (body, params, query)
│   ├── routes/v1/
│   │   ├── index.ts             # v1 router aggregator
│   │   ├── authRoutes.ts        # Auth routes (/auth/register, /auth/login)
│   │   ├── habitRoutes.ts       # Habit routes (CRUD + complete + stats)
│   │   └── userRouter.ts        # User routes (profile management)
│   ├── schemas/
│   │   ├── authSchema.ts        # Zod schemas for login & register
│   │   └── habitSchema.ts       # Zod schema for habit updates
│   └── utils/
│       ├── jwt.ts               # JWT generation & verification
│       └── passwords.ts         # Password hashing & comparison
├── tests/
│   ├── auth.test.ts             # Authentication integration tests
│   ├── setup.test.ts            # Test setup validation
│   └── setup/
│       ├── dbHelpers.ts         # Test database helper functions
│       └── globalSetup.ts       # Global test setup (DB creation)
├── migrations/                  # Drizzle SQL migration files
├── api-design-nodejs-v5/        # Bruno API collection files
├── types/                       # TypeScript type declarations
├── env.ts                       # Environment variable validation (Zod)
├── drizzle.config.ts            # Drizzle Kit configuration
├── vitest.config.ts             # Vitest configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

## 🧱 Database Schema

The database uses PostgreSQL with the following tables and relationships:

```
users (id, email, username, password, first_name, last_name, created_at, updated_at)
  └── has many habits

habits (id, user_id, name, description, frequency, target_count, is_active, created_at, updated_at)
  ├── belongs to user
  ├── has many entries
  └── has many tags (via habitTags)

entries (id, habit_id, completion_date, note, created_at)
  └── belongs to habit

tags (id, name, color, created_at, updated_at)
  └── has many habits (via habitTags)

habitTags (id, habit_id, tag_id, created_at)
  └── join table for many-to-many relationship between habits and tags
```

## 🚦 Getting Started

### Prerequisites

- Node.js ≥24.18.0
- PostgreSQL database
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd api-design-nodejs-v5
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
APP_STAGE=dev
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/habit_tracker
JWT_SECRET=your-super-secret-key-at-least-32-chars-long
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=12
```

4. Push the database schema:

```bash
npm run db:push
```

5. (Optional) Seed the database with demo data:

```bash
npm run db:seed
```

6. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

## 📖 API Reference

> **Base URL:** `http://localhost:3000/api/v1`

### Health Check

```http
GET /health
```

Returns server status and timestamp.

### Authentication

#### Register a new user

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (201 Created):**

```json
{
  "message": "User created successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "createdAt": "2024-01-01T00:00:00Z"
  },
  "token": "jwt-token"
}
```

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (201 Created):**

```json
{
  "message": "User Login Successfully",
  "token": "jwt-token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

### Habits

All habit endpoints require authentication. Include the JWT token in the `Authorization` header:

```
Authorization: Bearer <your-jwt-token>
```

#### Get all habits

```http
GET /api/v1/habits
```

Returns all habits for the authenticated user, including associated tags.

#### Get a single habit

```http
GET /api/v1/habits/:id
```

#### Create a habit

```http
POST /api/v1/habits
Content-Type: application/json

{
  "name": "Daily Exercise",
  "description": "30 minutes of cardio",
  "frequency": "daily",
  "targetCount": 1,
  "tagIds": ["tag-uuid-1", "tag-uuid-2"]
}
```

**Response (201 Created)**

#### Update a habit

```http
PATCH /api/v1/habits/:id
Content-Type: application/json

{
  "name": "Updated Habit Name",
  "tagIds": ["new-tag-uuid"]
}
```

#### Delete a habit

```http
DELETE /api/v1/habits/:id
```

**Response (204 No Content)**

#### Complete a habit

```http
POST /api/v1/habits/:id/complete
```

**Response (201 Created)**

#### Get habit statistics

```http
GET /api/v1/habits/:id/stats
```

Returns current streak, longest streak, total completions, and completion percentage.

### User Management

#### Get profile

```http
GET /api/v1/users/profile
```

#### Update profile

```http
PUT /api/v1/users/profile
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith"
}
```

#### Change password

```http
PUT /api/v1/users/password
Content-Type: application/json

{
  "currentPassword": "oldPassword123",
  "newPassword": "newSecurePassword456"
}
```

### Error Responses

| Status Code | Description                    |
| ----------- | ------------------------------ |
| 200         | Success                        |
| 201         | Created successfully           |
| 204         | Deleted successfully (no body) |
| 400         | Validation error (bad request) |
| 401         | Unauthorized (missing token)   |
| 403         | Forbidden (invalid token)      |
| 404         | Resource not found             |
| 409         | Conflict (duplicate data)      |
| 500         | Internal server error          |

## 💻 Scripts

| Script                  | Description                                 |
| ----------------------- | ------------------------------------------- |
| `npm run dev`           | Start development server with hot reload    |
| `npm start`             | Start production server                     |
| `npm test`              | Run tests (uses test database)              |
| `npm run test:watch`    | Run tests in watch mode                     |
| `npm run test:coverage` | Run tests with coverage report              |
| `npm run db:generate`   | Generate SQL migration from schema changes  |
| `npm run db:push`       | Push schema directly to database (dev only) |
| `npm run db:migrate`    | Apply migrations to database (production)   |
| `npm run db:studio`     | Open Drizzle Studio (visual DB explorer)    |
| `npm run db:seed`       | Seed database with demo data                |

## 🧪 Testing

The project uses **Vitest** with **Supertest** for integration testing.

### Test Setup

1. Create a `.env.test` file with your test database URL:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/habit_tracker_test
```

2. Run tests:

```bash
npm test
```

The test setup automatically:

- Creates a fresh test database (drops and recreates tables)
- Runs tests sequentially to avoid database conflicts
- Cleans up data between test runs
- Provides helper functions (`createTestUser`, `createTestHabit`, `cleanUpDatabase`)

### Writing Tests

Tests use Vitest's global test functions (`describe`, `test`, `it`, `expect`) available globally via the `globals: true` configuration.

Example test structure:

```typescript
import request from 'supertest'
import app from '../src/server.ts'
import { cleanUpDatabase, createTestUser } from './setup/dbHelpers.ts'

describe('Endpoint Name', () => {
  afterEach(async () => {
    await cleanUpDatabase()
  })

  test('should do something', async () => {
    const response = await request(app)
      .post('/api/v1/auth/register')
      .send({
        /* data */
      })
      .expect(201)

    expect(response.body).toHaveProperty('token')
  })
})
```

## 🌍 Environment Variables

| Variable             | Required | Default       | Description                                     |
| -------------------- | -------- | ------------- | ----------------------------------------------- |
| `APP_STAGE`          | Yes      | `dev`         | Application stage (`dev`, `test`, `production`) |
| `NODE_ENV`           | No       | `development` | Node environment                                |
| `PORT`               | No       | `3000`        | Server port                                     |
| `DATABASE_URL`       | Yes      | —             | PostgreSQL connection string                    |
| `JWT_SECRET`         | Yes      | —             | JWT signing key (min 32 characters)             |
| `JWT_EXPIRES_IN`     | No       | `7d`          | Token expiration duration                       |
| `BCRYPT_SALT_ROUNDS` | No       | `12`          | Password hashing salt rounds (10-20)            |

Environment variables are validated at startup using Zod schemas in `env.ts`. Invalid or missing variables will cause the server to exit with detailed error messages.

## 🗄 API Design Files

The `api-design-nodejs-v5/` directory contains API collection files for [Bruno](https://www.usebruno.com/), an open-source API client. Import the `opencollection.yml` file into Bruno to explore and test the API endpoints.

## 📄 License

ISC

---

Built with ❤️ by [Rahul](https://rahulkumarpahwa.me) as part of a Node.js API design course.
