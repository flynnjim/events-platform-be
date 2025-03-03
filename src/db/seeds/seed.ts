import format from "pg-format";
import db from "../connection";

import { SeedData } from "../../types/types";

const seed = async ({
  eventData,
  userData,
  staffData,
  registrationData,
}: SeedData): Promise<void> => {
  await db.query(`DROP TABLE IF EXISTS registration CASCADE;`);
  await db.query(`DROP TABLE IF EXISTS events CASCADE;`);
  await db.query(`DROP TABLE IF EXISTS staff CASCADE;`);
  await db.query(`DROP TABLE IF EXISTS users CASCADE;`);

  await db.query(`
    CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR NOT NULL UNIQUE,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL,
      email VARCHAR NOT NULL UNIQUE,
      password_hash VARCHAR NOT NULL
    );
  `);

  await db.query(`
    CREATE TABLE staff (
      staff_id SERIAL PRIMARY KEY,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL,
      email VARCHAR NOT NULL UNIQUE,
      password_hash VARCHAR NOT NULL
    );
  `);

  await db.query(`
    CREATE TABLE events (
      event_id SERIAL PRIMARY KEY,
      title VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      location JSONB NOT NULL,
      created_by INT REFERENCES staff(staff_id),
      start_time TIMESTAMP NOT NULL,
      end_time TIMESTAMP NOT NULL
    );
  `);

  await db.query(`
    CREATE TABLE registration (
      registration_id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(user_id),
      event_id INT REFERENCES events(event_id),
      registration_date TIMESTAMP DEFAULT NOW(),
      status VARCHAR NOT NULL
    );
  `);

  const insertUsersQuery = format(
    `INSERT INTO users (username, first_name, last_name, email, password_hash) VALUES %L RETURNING *;`,
    userData.map(
      ({ username, first_name, last_name, email, password_hash }) => [
        username,
        first_name,
        last_name,
        email,
        password_hash,
      ]
    )
  );
  await db.query(insertUsersQuery);

  const insertStaffQuery = format(
    `INSERT INTO staff (first_name, last_name, email, password_hash) VALUES %L RETURNING *;`,
    staffData.map(({ first_name, last_name, email, password_hash }) => [
      first_name,
      last_name,
      email,
      password_hash,
    ])
  );
  await db.query(insertStaffQuery);

  const insertEventsQuery = format(
    `INSERT INTO events (title, description, location, created_by, start_time, end_time) VALUES %L RETURNING *;`,
    eventData.map(
      ({ title, description, location, created_by, start_time, end_time }) => [
        title,
        description,
        JSON.stringify(location),
        created_by,
        start_time,
        end_time,
      ]
    )
  );
  await db.query(insertEventsQuery);

  const insertRegistrationQuery = format(
    `INSERT INTO registration (user_id, event_id, registration_date, status) VALUES %L RETURNING *;`,
    registrationData.map(({ user_id, event_id, registration_date, status }) => [
      user_id,
      event_id,
      registration_date,
      status,
    ])
  );
  await db.query(insertRegistrationQuery);
};

export default seed;
