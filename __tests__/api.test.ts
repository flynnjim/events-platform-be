import app from "../src/app";
import request from "supertest";
import db from "../src/db/connection";
import seed from "../src/db/seeds/seed";
import testData from "../src/db/data/test-data";
import { User } from "../src/types/types";

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
});
