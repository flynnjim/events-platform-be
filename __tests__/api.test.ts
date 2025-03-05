import app from "../src/app";
import request from "supertest";
import db from "../src/db/connection";
import seed from "../src/db/seeds/seed";
import testData from "../src/db/data/test-data";
import { User, Event } from "../src/types/types";

beforeEach(async () => {
  await seed(testData);
});

afterAll(async () => {
  await db.end();
});

describe("Events Platfomr Backend API", () => {
  describe("GET /api/users that returns all users", () => {
    test("returns a 200 response status with correct data properties", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then((response) => {
          const {
            body: { users },
          } = response;
          expect(Array.isArray(users)).toBe(true);
          users.forEach((user: User) => {
            expect(user).toHaveProperty("user_id");
            expect(user).toHaveProperty("username");
            expect(user).toHaveProperty("first_name");
            expect(user).toHaveProperty("last_name");
            expect(user).toHaveProperty("email");
            expect(user).toHaveProperty("password_hash");
          });
        });
    });
    test("returns a 404 response status if sent invalid address with appropriate error message", () => {
      return request(app)
        .get("/api/userss")
        .expect(404)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe(
            "Sorry, the endpoint you are searching for does not exist."
          );
        });
    });
  });
  describe("GET /api/users/:user_id", () => {
    test("returns a 200 response status with correct data properties", () => {
      return request(app)
        .get("/api/users/2")
        .expect(200)
        .then((response) => {
          const {
            body: { user },
          } = response;
          expect(Array.isArray(user)).toBe(false);
          expect(user.user_id).toBe(2);
          expect(user.username).toBe("code_master");
          expect(user.first_name).toBe("Bob");
          expect(user.last_name).toBe("Smith");
          expect(user.email).toBe("bob.smith@example.com");
          expect(user.password_hash).toBe("$2b$10$1234567890abcdefghijklm");
        });
    });
    test("returns a 400 Bad request when parameter is invalid", () => {
      return request(app)
        .get("/api/users/two")
        .expect(400)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("Bad request");
        });
    });
    test("returns a 404 not found when parameter is out of user_id range", () => {
      return request(app)
        .get("/api/users/99")
        .expect(404)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("User not found");
        });
    });
  });
  describe("GET /api/events", () => {
    test("returns a 200 response status with correct data properties", () => {
      return request(app)
        .get("/api/events")
        .expect(200)
        .then((response) => {
          const {
            body: { events },
          } = response;
          expect(Array.isArray(events)).toBe(true);
          events.forEach((event: Event) => {
            expect(event).toHaveProperty("event_id");
            expect(event).toHaveProperty("title");
            expect(event).toHaveProperty("description");
            expect(event).toHaveProperty("location");
            expect(event).toHaveProperty("created_by");
            expect(event).toHaveProperty("start_time");
            expect(event).toHaveProperty("end_time");
          });
        });
    });
  });
  describe("GET /api/events/:event_id", () => {
    test("returns a 200 response status with correct data properties", () => {
      return request(app)
        .get("/api/events/1")
        .expect(200)
        .then((response) => {
          const {
            body: { event },
          } = response;
          expect(Array.isArray(event)).toBe(false);
          expect(event.event_id).toBe(1);
          expect(event.description).toBe(
            "A conference discussing the latest trends in technology and software development."
          );
          expect(event.location).toEqual({
            latitude: 37.7749,
            longitude: -122.4194,
          });
          expect(new Date(event.start_time)).toBeInstanceOf(Date);
          expect(new Date(event.end_time)).toBeInstanceOf(Date);
        });
    });
    test("returns a 400 Bad request when parameter is invalid", () => {
      return request(app)
        .get("/api/events/one")
        .expect(400)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("Bad request");
        });
    });
    test("returns a 404 not found when parameter is out of event_id range", () => {
      return request(app)
        .get("/api/events/99")
        .expect(404)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("Event not found");
        });
    });
  });
  describe("GET /api/users/registered/:event_id", () => {
    test("returns a 200 response status with correct data properties", () => {
      return request(app)
        .get("/api/users/registered/1")
        .expect(200)
        .then((response) => {
          const {
            body: { users },
          } = response;
          expect(Array.isArray(users)).toBe(true);
          users.forEach((user: User) => {
            expect(user.user_id).toBe(3);
            expect(user.username).toBe("dev_wizard");
            expect(user.first_name).toBe("Charlie");
            expect(user.last_name).toBe("Brown");
            expect(user.email).toBe("charlie.brown@example.com");
          });
        });
    });
    test("returns a 400 Bad request when parameter is invalid", () => {
      return request(app)
        .get("/api/users/registered/one")
        .expect(400)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("Bad request");
        });
    });
    test("returns a 404 not found when parameter is out of event_id range", () => {
      return request(app)
        .get("/api/users/registered/99")
        .expect(404)
        .then((response) => {
          const {
            body: { msg },
          } = response;
          expect(msg).toBe("Users not found");
        });
    });
  });
});
