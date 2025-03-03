import app from "../src/app";
import request from "supertest";
import db from "../src/db/connection";
import seed from "../src/db/seeds/seed";
import testData from "../src/db/data/test-data";

beforeEach(async () => {
  await seed(testData);
});

afterAll(async () => {
  await db.end();
});

describe("Events Platfomr Backend API", () => {
  describe("GET /api/users that returns all users", () => {
    test("returns a 200 response status", () => {
      return request(app).get("/api/users").expect(200);
    });
  });
});
