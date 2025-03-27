"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_format_1 = __importDefault(require("pg-format"));
const connection_1 = __importDefault(require("../connection"));
const utils_1 = require("./utils");
const seed = (_a) => __awaiter(void 0, [_a], void 0, function* ({ eventData, userData, staffData, registrationData, }) {
    yield connection_1.default.query(`DROP TABLE IF EXISTS registration CASCADE;`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS events CASCADE;`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS staff CASCADE;`);
    yield connection_1.default.query(`DROP TABLE IF EXISTS users CASCADE;`);
    yield connection_1.default.query(`
    CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR NOT NULL UNIQUE,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL,
      email VARCHAR NOT NULL UNIQUE,
      password_hash VARCHAR NOT NULL
    );
  `);
    yield connection_1.default.query(`
    CREATE TABLE staff (
      staff_id SERIAL PRIMARY KEY,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL,
      email VARCHAR NOT NULL UNIQUE,
      password_hash VARCHAR NOT NULL
    );
  `);
    yield connection_1.default.query(`
    CREATE TABLE events (
      event_id SERIAL PRIMARY KEY,
      title VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      event_type VARCHAR NOT NULL,
      details VARCHAR(5000) NOT NULL,
      location JSONB NOT NULL,
      address VARCHAR NOT NULL,
      created_by INT REFERENCES staff(staff_id),
      start_time TIMESTAMP DEFAULT NOW(),
      end_time TIMESTAMP DEFAULT NOW(),
      image VARCHAR NOT NULL
    );
  `);
    yield connection_1.default.query(`
    CREATE TABLE registration (
      registration_id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(user_id),
      event_id INT REFERENCES events(event_id),
      registration_date TIMESTAMP DEFAULT NOW(),
      status VARCHAR NOT NULL
    );
  `);
    const insertUsersQuery = (0, pg_format_1.default)(`INSERT INTO users (username, first_name, last_name, email, password_hash) VALUES %L RETURNING *;`, userData.map(({ username, first_name, last_name, email, password_hash }) => [
        username,
        first_name,
        last_name,
        email,
        password_hash,
    ]));
    yield connection_1.default.query(insertUsersQuery);
    const insertStaffQuery = (0, pg_format_1.default)(`INSERT INTO staff (first_name, last_name, email, password_hash) VALUES %L RETURNING *;`, staffData.map(({ first_name, last_name, email, password_hash }) => [
        first_name,
        last_name,
        email,
        password_hash,
    ]));
    yield connection_1.default.query(insertStaffQuery);
    const insertEventsQuery = (0, pg_format_1.default)(`INSERT INTO events (title, description, event_type, details, location, address, created_by, start_time, end_time, image) VALUES %L RETURNING *;`, eventData.map((event) => {
        const convertedEvent = (0, utils_1.convertTimestampToDate)(event);
        return [
            convertedEvent.title,
            convertedEvent.description,
            convertedEvent.event_type,
            convertedEvent.details,
            JSON.stringify(convertedEvent.location),
            convertedEvent.address,
            convertedEvent.created_by,
            convertedEvent.start_time,
            convertedEvent.end_time,
            convertedEvent.image ||
                "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743084248/computer_okaake.jpg",
        ];
    }));
    yield connection_1.default.query(insertEventsQuery);
    const insertRegistrationQuery = (0, pg_format_1.default)(`INSERT INTO registration (user_id, event_id, registration_date, status) VALUES %L RETURNING *;`, registrationData.map((registration) => {
        const convertedRegistration = (0, utils_1.convertRegistrationTimestampToDate)(registration);
        return [
            convertedRegistration.user_id,
            convertedRegistration.event_id,
            convertedRegistration.registration_date,
            convertedRegistration.status,
        ];
    }));
    yield connection_1.default.query(insertRegistrationQuery);
});
exports.default = seed;
