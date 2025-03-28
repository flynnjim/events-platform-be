# EventRight API

## Hosted on Supabase and Render

### [View API](https://github.com/flynnjim/events-platform-be.git)

## Table of Contents

- [Introduction](#introduction)
- [Endpoints and Example Responses](#endpoints-and-example-responses)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Database Setup](#database-setup)
- [Dev Dependencies](#dev-dependencies)
- [Dependencies](#dependencies)
- [Hosting with Supabase and Render](#hosting-with-supabase-and-render)
  - [Set up Supabase Database](#set-up-supabase-database)
  - [Set Up a Production Environment Variable](#set-up-a-production-environment-variable)
  - [Update the Connection Pool](#update-the-connection-pool)
  - [Configure Production Database](#configure-production-database)
  - [Add a Listen File](#add-a-listen-file)
  - [Update the package.json](#update-the-packagejson)
  - [Seed the Online Database](#seed-the-online-database)
  - [Host the API on Render](#host-the-api-on-render)

## Introduction

EventRight is a RESTful API built to provide event data programmatically for a front-end application. This API serves event data, users, staff, and registrations, allowing users to interact with event information, login as either a user or a staff member, create and update event as staff and register for events. The backend is built using PostgreSQL, Express, and Node.js with TypeScript, along with essential security features like password hashing via bcrypt.

## Endpoints and Example Responses

- **GET /api**  
  **Description:** Serves up a JSON representation of all the available endpoints of the API.

- **GET /api/users**  
  **Description:** Serves up an array of all users.  
  **Example Response:**

  ```json
  {
    "topics": [
      {
        "user_id": 1,
        "username": "tech_guru",
        "first_name": "Alice",
        "last_name": "Johnson",
        "email": "alice.johnson@example.com",
        "password_hash": "$2b$10$abcdefghijklmnopqrstuv"
      }
    ]
  }
  ```

- **GET /api/users/:user_id**  
  **Description:** Serves up a single user by user_id.  
  **Queries:** ["Category"]  
  **Example Response:**

  ```json
  {
    "topics": {
      "user_id": 1,
      "username": "tech_guru",
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      "password_hash": "$2b$10$abcdefghijklmnopqrstuv"
    }
  }
  ```

- **POST /api/users/login**  
  **Description:** Serves up a single user by username for login.  
  **Example Response:**

  ```json
  {
    "topics": {
      "user_id": 1,
      "username": "tech_guru",
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      "password_hash": "$2b$10$abcdefghijklmnopqrstuv"
    }
  }
  ```

- **GET /api/events**  
  **Description:** Serves up an array of all events.  
  **Example Response:**

  ```json
  {
    "topics": [
      {
        "event_id": 1,
        "title": "Tech Conference 2025",
        "description": "A conference discussing the latest trends in technology and software development.",
        "location": { "latitude": 37.7749, "longitude": -122.4194 },
        "address": "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
        "created_by": 2,
        "start_time": 1755277200000,
        "end_time": 1755306000000
      }
    ]
  }
  ```

- **GET /api/events/:event_id**  
  **Description:** Serves up a single event by event_id.  
  **Example Response:**

  ```json
  {
    "topics": {
      "event_id": 1,
      "title": "Tech Conference 2025",
      "description": "A conference discussing the latest trends in technology and software development.",
      "location": { "latitude": 37.7749, "longitude": -122.4194 },
      "address": "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
      "created_by": 2,
      "start_time": 1755277200000,
      "end_time": 1755306000000
    }
  }
  ```

- **GET /api/users/registered/:event_id**  
  **Description:** Serves up all registered users for a given event_id.  
  **Example Response:**

  ```json
  {
    "users": [
      {
        "user_id": 1,
        "username": "tech_guru",
        "first_name": "Alice",
        "last_name": "Johnson",
        "email": "alice.johnson@example.com",
        "password_hash": "$2b$10$abcdefghijklmnopqrstuv"
      }
    ]
  }
  ```

- **GET /api/staff**  
  **Description:** Serves up an array of all staff.  
  **Example Response:**

  ```json
  {
    "topics": [
      {
        "staff_id": 1,
        "first_name": "Liam",
        "last_name": "Parker",
        "email": "liam.parker@company.com",
        "password_hash": "$2b$10$abcdefg12345678zxyTkjL6/2z5wD5U8Xp/a9rHg"
      }
    ]
  }
  ```

- **POST /api/staff/login**  
  **Description:** Serves up a single staff member by email for login.  
  **Example Response:**

  ```json
  {
    "topics": [
      {
        "staff_id": 1,
        "first_name": "Liam",
        "last_name": "Parker",
        "email": "liam.parker@company.com",
        "password_hash": "$2b$10$abcdefg12345678zxyTkjL6/2z5wD5U8Xp/a9rHg"
      }
    ]
  }
  ```

- **GET /api/staff/:staff_id**  
  **Description:** Serves up a single staff object by staff_id.  
  **Example Response:**

  ```json
  {
    "topics": {
      "staff_id": 1,
      "first_name": "Liam",
      "last_name": "Parker",
      "email": "liam.parker@company.com",
      "password_hash": "$2b$10$abcdefg12345678zxyTkjL6/2z5wD5U8Xp/a9rHg"
    }
  }
  ```

- **POST /api/events/:created_by**  
  **Description:** Adds an event and returns the event object.  
  **Example Response:**

  ```json
  {
    "event_id": 1,
    "title": "Tech Conference 2025",
    "description": "A conference discussing the latest trends in technology and software development.",
    "location": { "latitude": 37.7749, "longitude": -122.4194 },
    "address": "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
    "created_by": 2,
    "start_time": 1755277200000,
    "end_time": 1755306000000
  }
  ```

- **PATCH /api/events**  
  **Description:** Updates an event and returns the updated event object.  
  **Example Response:**

  ```json
  {
    "event_id": 1,
    "title": "Tech Conference 2025",
    "description": "A conference discussing the latest trends in technology and software development.",
    "location": { "latitude": 37.7749, "longitude": -122.4194 },
    "address": "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
    "created_by": 2,
    "start_time": 1755277200000,
    "end_time": 1755306000000
  }
  ```

- **POST /api/registration**  
  **Description:** Adds a user registration to an event and returns the registration object.  
  **Example Response:**

  ```json
  {
    "registration_id": 1,
    "user_id": 3,
    "event_id": 1,
    "registration_date": 1746093600000,
    "status": "Confirmed"
  }
  ```

- **PATCH /api/registration**  
  **Description:** Updates a user registration for an event and returns the registration object.  
  **Example Response:**
  ```json
  {
    "registration_id": 1,
    "user_id": 3,
    "event_id": 1,
    "registration_date": 1746093600000,
    "status": "Confirmed"
  }
  ```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/flynnjim/events-platform-be.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Build the project**
   ```bash
   npm run build
   ```
4. **Scripts**

   - **setup-dbs:** `psql -f ./src/db/setup.sql`
   - **seed:** `node ./dist/db/seeds/run-seed.js`
   - **test:** `jest`
   - **start:** `node dist/listen.js`
   - **dev:** `nodemon src/listen.ts`
   - **seed-prod:** `NODE_ENV=production npm run seed`
   - **test-all:** `npm test -- --runInBand`

5. **Create .env files**  
   To connect to the databases locally, create two .env files:

- `.env.development`:
  ```makefile
  PGDATABASE=events_platform
  ```
- `.env.test`:
  ```makefile
  PGDATABASE=events_platform_test
  ```

6. **Setup the database**  
   To create the necessary databases, run:

   ```bash
   npm run setup-dbs
   ```

   These files should point to your local PostgreSQL databases for development and testing environments.

7. **Seed the database**  
   Populate the development database with initial data by running:

   ```bash
   npm run seed
   ```

   Ensure that the database is correctly seeded before running any tests.

8. **Run the Server**  
   Start the application locally with:

   ```bash
   npm start
   ```

   This will start the Express server on your local machine.

9. **Run tests**  
   To run the test suite and verify the application’s functionality, use:
   ```bash
   npm test
   ```
   Tests are run using Jest and Supertest for API endpoint validation.

## Technologies Used

- **Node.js:** JavaScript runtime for building the backend.
- **Express:** Web framework for handling routing and HTTP requests.
- **PostgreSQL:** Relational database for storing data.
- **TypeScript:** Superset of JavaScript that provides static typing.
- **bcrypt:** For securely hashing passwords.
- **jsonwebtoken:** For token-based authentication.
- **ts-node:** For executing TypeScript directly.
- **nodemon:** For automatic server restarts during development.

## Database Setup

To set up PostgreSQL on your system, follow this guide: [Install PostgreSQL](https://www.w3schools.com/postgresql/postgresql_install.php)

## Dev Dependencies

- `"@types/bcrypt": "^5.0.2"`
- `"@types/cors": "^2.8.17"`
- `"@types/express": "^5.0.0"`
- `"@types/jest": "^29.5.14"`
- `"@types/jsonwebtoken": "^9.0.9"`
- `"@types/node": "^22.13.5"`
- `"@types/pg": "^8.11.11"`
- `"@types/pg-format": "^1.0.5"`
- `"@types/supertest": "^6.0.2"`
- `"jest": "^29.7.0"`
- `"ts-jest": "^29.2.6"`
- `"ts-node": "^10.9.2"`
- `"typescript": "^5.7.3"`

## Dependencies

- `"bcrypt": "^5.1.1"`
- `"cors": "^2.8.5"`
- `"dotenv": "^16.4.7"`
- `"express": "^4.21.2"`
- `"jsonwebtoken": "^9.0.2"`
- `"nodemon": "^3.1.9"`
- `"pg": "^8.13.3"`
- `"pg-format": "^1.0.4"`
- `"supertest": "^7.0.0"`

## Hosting with Supabase and Render

### Set Up a Database Instance with Supabase

1. **Create a Supabase Account:** Sign up with email or GitHub.
2. **Create a Project:** After logging in, click the "+ New Project" button.
3. **Configure the Project:** Choose a project name, create a database password, and select the region.
4. **Copy Database Connection String:** In your project, go to "Connect" and copy the connection string (e.g., `postgresql://postgres:YOUR_PASSWORD@aws-0-eu-west-2.pooler.supabase.com:6543/postgres`).

### Set Up a Production Environment Variable

1. **Create .env.production:** In your project repo, create a `.env.production` file and add the `DATABASE_URL` variable using the copied connection string.
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@aws-0-eu-west-2.pooler.supabase.com:6543/postgres"
   ```
2. **Update .gitignore:** Add `.env.production` to `.gitignore` to keep the database URL private.

### Update the Connection Pool

1. **Assign Environment Variable:** In your database connection file (e.g., `connection.ts`), ensure the `NODE_ENV` is assigned as follows:
   ```js
   const ENV = process.env.NODE_ENV || "development";
   ```
2. **Handle Missing Variables:** Verify that either `PGDATABASE` or `DATABASE_URL` is set:
   ```js
   if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
     throw new Error("PGDATABASE or DATABASE_URL not set");
   }
   ```

### Configure Production Database

Add configuration for production:

```ts
const config = {};
if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}
module.exports = new Pool(config);
```

### Add a Listen File

Ensure there is a `listen.ts` file to allow the hosting provider to start the server:

```ts
import app from "./app";
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

### Update the package.json

In your `package.json`, ensure the `main` key is set to `dist/listen.js`:

```json
"main": "dist/listen.js"
```

Also, include scripts for "start" and "seed-prod":

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/listen.js",
  "seed-prod": "NODE_ENV=production npm run seed",
}
```

### Seed the Online Database

Run the production seed script:

```bash
npm run seed-prod
```

This script will connect to the production database and seed it with initial data. You can view the database tables via Supabase's Table Editor.

### Host the API on Render

1. **Sign up to Render:** Go to [Render](https://render.com/) and sign up for an account.
2. **Create a New Web Service:** Click on the "New +" button to create a new Web Service.
3. **Connect GitHub:** Render allows you to connect your GitHub account and give permission to access your app’s repository. Alternatively, you can paste the URL of your public Git repository.
4. **Set Environment Variables:**
   - `DATABASE_URL`: Set this to the Supabase database URL (the same as in your `.env.production` file).
   - `NODE_ENV`: Set this to `production`.
5. **Create and Deploy:** Click "Create" to start the deployment process. The initial deployment may take a few minutes.
6. **Access the API:** Once deployed, Render will provide a link to the hosted application at the top of the page.
