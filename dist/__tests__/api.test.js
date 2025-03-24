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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const connection_1 = __importDefault(require("../db/connection"));
const seed_1 = __importDefault(require("../db/seeds/seed"));
const test_data_1 = __importDefault(require("../db/data/test-data"));
const bcrypt_1 = __importDefault(require("bcrypt"));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, seed_1.default)(test_data_1.default);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.end();
}));
describe("Events Platfomr Backend API", () => {
    describe("GET /api/users that returns all users", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users")
                .expect(200)
                .then((response) => {
                const { body: { users }, } = response;
                expect(Array.isArray(users)).toBe(true);
                users.forEach((user) => {
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
            return (0, supertest_1.default)(app_1.default)
                .get("/api/userss")
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Sorry, the endpoint you are searching for does not exist.");
            });
        });
    });
    describe("GET /api/users/2?password=password2", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/2?password=password2")
                .expect(200)
                .then((response) => {
                const { body: { user }, } = response;
                expect(Array.isArray(user)).toBe(false);
                expect(user.user_id).toBe(2);
                expect(user.username).toBe("web_dev_123");
                expect(user.first_name).toBe("John");
                expect(user.last_name).toBe("Smith");
                expect(user.email).toBe("john.smith@example.com");
                const rawPassword = "password2";
                return bcrypt_1.default
                    .compare(rawPassword, user.password_hash)
                    .then((isMatch) => {
                    expect(isMatch).toBeTruthy();
                });
            });
        });
        test("returns a 403 and Invalid password message", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/2?password=password1")
                .expect(403)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Invalid password");
            });
        });
        test("returns a 400 Bad request when parameter is invalid", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/two?password=password2")
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Bad request");
            });
        });
        test("returns a 404 not found when parameter is out of user_id range", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/99?password=password2")
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("User not found");
            });
        });
    });
    describe("GET /api/events", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/events")
                .expect(200)
                .then((response) => {
                const { body: { events }, } = response;
                expect(Array.isArray(events)).toBe(true);
                events.forEach((event) => {
                    expect(event).toHaveProperty("event_id");
                    expect(event).toHaveProperty("title");
                    expect(event).toHaveProperty("description");
                    expect(event).toHaveProperty("event_type");
                    expect(event).toHaveProperty("details");
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
            return (0, supertest_1.default)(app_1.default)
                .get("/api/events/1")
                .expect(200)
                .then((response) => {
                const { body: { event }, } = response;
                expect(Array.isArray(event)).toBe(false);
                expect(event.event_id).toBe(1);
                expect(event).toHaveProperty("details");
                expect(event).toHaveProperty("event_type");
                expect(event.details).toBe("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
                expect(event.description).toBe("A conference discussing the latest trends in technology and software development.");
                expect(event.location).toEqual({
                    latitude: 37.7749,
                    longitude: -122.4194,
                });
                expect(new Date(event.start_time)).toBeInstanceOf(Date);
                expect(new Date(event.end_time)).toBeInstanceOf(Date);
            });
        });
        test("returns a 400 Bad request when parameter is invalid", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/events/one")
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Bad request");
            });
        });
        test("returns a 404 not found when parameter is out of event_id range", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/events/99")
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Event not found");
            });
        });
    });
    describe("GET /api/users/registered/:event_id", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/registered/1")
                .expect(200)
                .then((response) => {
                const { body: { users }, } = response;
                expect(Array.isArray(users)).toBe(true);
                users.forEach((user) => {
                    expect(user.user_id).toBe(3);
                    expect(user.username).toBe("cyber_wiz");
                    expect(user.first_name).toBe("Olivia");
                    expect(user.last_name).toBe("Taylor");
                    expect(user.email).toBe("olivia.taylor@example.com");
                });
            });
        });
        test("returns a 400 Bad request when parameter is invalid", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/registered/one")
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Bad request");
            });
        });
        test("returns a 404 not found when parameter is out of event_id range", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/users/registered/99")
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Users not found");
            });
        });
    });
    describe("GET /api/staff", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/staff")
                .expect(200)
                .then((response) => {
                const { body: { staff }, } = response;
                expect(Array.isArray(staff)).toBe(true);
                staff.forEach((staff) => {
                    expect(staff).toHaveProperty("staff_id");
                    expect(staff).toHaveProperty("first_name");
                    expect(staff).toHaveProperty("last_name");
                    expect(staff).toHaveProperty("email");
                    expect(staff).toHaveProperty("password_hash");
                });
            });
        });
    });
    describe("GET /api/staff/:staff_id", () => {
        test("returns a 200 response status with correct data properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/staff/1?password=password1")
                .expect(200)
                .then((response) => {
                const { body: { staff }, } = response;
                expect(Array.isArray(staff)).toBe(false);
                expect(staff).toHaveProperty("staff_id");
                expect(staff).toHaveProperty("first_name");
                expect(staff).toHaveProperty("last_name");
                expect(staff).toHaveProperty("email");
                expect(staff).toHaveProperty("password_hash");
                const rawPassword = "password1";
                return bcrypt_1.default
                    .compare(rawPassword, staff.password_hash)
                    .then((isMatch) => {
                    expect(isMatch).toBeTruthy();
                });
            });
        });
        test("returns a 403 response status with cInvalid password message", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/staff/1?password=password2")
                .expect(403)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Invalid password");
            });
        });
        test("returns a 400 Bad request when parameter is invalid", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/staff/juan")
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Bad request");
            });
        });
        test("returns a 404 not found when parameter is out of staff_id range", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api/staff/99")
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Staff not found");
            });
        });
    });
    describe("POST /api/events/:created_by", () => {
        test("returns 201 status code and an object with event added", () => {
            const body = {
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/events/1")
                .send(body)
                .expect(201)
                .then((response) => {
                const { body: { event }, } = response;
                expect(Array.isArray(event)).toBe(false);
                expect(event.event_id).toBe(6);
                expect(event.created_by).toBe(1);
                expect(event.title).toBe("New Tech Horizons 2025");
                expect(event.description).toBe("A conference that will discuss where the world of technology is heading");
                expect(event).toHaveProperty("details");
                expect(event).toHaveProperty("event_type");
                expect(event.details).toBe("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
                expect(event.location).toEqual({
                    latitude: 37.7749,
                    longitude: -122.4194,
                });
                expect(new Date(event.start_time)).toBeInstanceOf(Date);
                expect(new Date(event.end_time)).toBeInstanceOf(Date);
            });
        });
        test("returns a 404 if body contains created_by without corresponding entry", () => {
            const body = {
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/events/99")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Staff member with ID 99 does not exist.");
            });
        });
        test("returns a 400 if body is not in correct format", () => {
            const body = {
                writer: "butter_tower",
                text: "I want more noise!",
                other: "I enjoyed this!",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/events/1")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body } = response;
                expect(body).toEqual({ msg: "Invalid event body" });
            });
        });
        test("returns a 400 if created_by is not valid number", () => {
            const body = {
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/events/nine")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Invalid staff id");
            });
        });
    });
    describe("PATCH /api/events", () => {
        test("returns event object updated with passed event body information", () => {
            const body = {
                event_id: 1,
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                created_by: 1,
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/events")
                .send(body)
                .expect(200)
                .then((response) => {
                const { body: { event }, } = response;
                expect(Array.isArray(event)).toBe(false);
                expect(event.event_id).toBe(1);
                expect(event.created_by).toBe(1);
                expect(event.title).toBe("New Tech Horizons 2025");
                expect(event.description).toBe("A conference that will discuss where the world of technology is heading");
                expect(event.event_type).toBe("Tech");
                expect(event).toHaveProperty("details");
                expect(event.details).toBe("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
                expect(event.location).toEqual({
                    latitude: 37.7749,
                    longitude: -122.4194,
                });
                expect(new Date(event.start_time)).toBeInstanceOf(Date);
                expect(new Date(event.end_time)).toBeInstanceOf(Date);
            });
        });
        test("returns a 404 if body contains created_by without corresponding entry", () => {
            const body = {
                event_id: 1,
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                created_by: 99,
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/events")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Staff member with ID 99 does not exist.");
            });
        });
        test("returns a 404 if body contains event_id without corresponding entry", () => {
            const body = {
                event_id: 99,
                title: "New Tech Horizons 2025",
                description: "A conference that will discuss where the world of technology is heading",
                event_type: "Tech",
                details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                location: { latitude: 37.7749, longitude: -122.4194 },
                address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
                created_by: 1,
                start_time: 1755277200000,
                end_time: 1755306000000,
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/events")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Event with ID 99 not found.");
            });
        });
        test("returns a 400 if body is not in correct format", () => {
            const body = {
                writer: "butter_tower",
                text: "I want more noise!",
                other: "I enjoyed this!",
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/events")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body } = response;
                expect(body).toEqual({ msg: "Invalid event body" });
            });
        });
    });
    describe("POST /api/registration", () => {
        test("returns 201 status code and an object with event added", () => {
            const body = {
                user_id: 2,
                event_id: 2,
                registration_date: 1767266400000,
                status: "Confirmed",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/registration")
                .send(body)
                .expect(201)
                .then((response) => {
                const { body: { registration }, } = response;
                expect(Array.isArray(registration)).toBe(false);
                expect(registration.registration_id).toBe(6);
                expect(registration.user_id).toBe(2);
                expect(registration.event_id).toBe(2);
                expect(new Date(registration.registration_date)).toBeInstanceOf(Date);
                expect(registration.status).toBe("Confirmed");
            });
        });
        test("returns a 404 if body contains user_id without corresponding entry", () => {
            const body = {
                user_id: 99,
                event_id: 2,
                registration_date: 1767266400000,
                status: "Confirmed",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/registration")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("User with ID 99 does not exist.");
            });
        });
        test("returns a 400 if body is not in correct format", () => {
            const body = {
                writer: "butter_tower",
                text: "I want more noise!",
                other: "I enjoyed this!",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/registration")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body } = response;
                expect(body).toEqual({ msg: "Invalid registration body" });
            });
        });
        test("returns a 400 if created_by is not valid number", () => {
            const body = {
                user_id: "ninety nine",
                event_id: "twelve",
                registration_date: 1767266400000,
                status: "Confirmed",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/registration")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Invalid registration body");
            });
        });
    });
    describe("PATCH /api/registration", () => {
        test("returns registration object updated with passed event body information", () => {
            const body = {
                registration_id: 1,
                status: "Cancelled",
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/registration")
                .send(body)
                .expect(200)
                .then((response) => {
                const { body: { registration }, } = response;
                expect(Array.isArray(registration)).toBe(false);
                expect(registration.registration_id).toBe(1);
                expect(registration.user_id).toBe(3);
                expect(registration.event_id).toBe(1);
                expect(registration.status).toBe("Cancelled");
            });
        });
        test("returns a 404 if body contains user_id without corresponding entry", () => {
            const body = {
                registration_id: 99,
                status: "Cancelled",
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/registration")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toEqual("Registration with ID 99 not found.");
            });
        });
        test("returns a 400 if body is not in correct format", () => {
            const body = {
                writer: "butter_tower",
                text: "I want more noise!",
                other: "I enjoyed this!",
            };
            return (0, supertest_1.default)(app_1.default)
                .patch("/api/registration")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body } = response;
                expect(body).toEqual({ msg: "Invalid registration body" });
            });
        });
    });
    describe("GET /api that returns documentation of available api endpoints", () => {
        test("returns documentation with the expected properties", () => {
            return (0, supertest_1.default)(app_1.default)
                .get("/api")
                .expect(200)
                .then((response) => {
                const { body } = response;
                expect(typeof body).toBe("object");
                const objectKeys = Object.keys(body);
                expect(objectKeys.includes("GET /api")).toBe(true);
                expect(objectKeys.includes("GET /api/users")).toBe(true);
                expect(objectKeys.includes("GET /api/staff")).toBe(true);
                expect(objectKeys.includes("GET /api/events")).toBe(true);
            });
        });
    });
    describe("POST /api/users/login returns user for passed username and password", () => {
        test("returns 201 status code and returns user object", () => {
            const body = {
                username: "cloud_expert",
                password: "password1",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/users/login")
                .send(body)
                .expect(201)
                .then((response) => {
                const { body: { user }, } = response;
                expect(user).toHaveProperty("user_id");
                expect(user).toHaveProperty("username");
                expect(user).toHaveProperty("first_name");
                expect(user).toHaveProperty("last_name");
                expect(user).toHaveProperty("email");
                expect(user).toHaveProperty("password_hash");
            });
        });
        test("returns 403 status code and Invalid password message", () => {
            const body = {
                username: "cloud_expert",
                password: "password2",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/users/login")
                .send(body)
                .expect(403)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Invalid password");
            });
        });
        test("returns 404 status code and User not found message if no match message", () => {
            const body = {
                username: "cloud_experts",
                password: "password2",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/users/login")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("User not found");
            });
        });
        test("returns 400 status code and Username and password are required message if username or password missing", () => {
            const body = {
                username: "cloud_expert",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/users/login")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Username and password are required");
            });
        });
        test("returns 400 status code and Username and password are required message if username or password missing", () => {
            const body = {
                password: "password2",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/users/login")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Username and password are required");
            });
        });
    });
    describe("POST /api/staff/login returns staff for passed email and password", () => {
        test("returns 201 status code and staff object", () => {
            const body = {
                email: "liam.parker@company.com",
                password: "password1",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/staff/login")
                .send(body)
                .expect(201)
                .then((response) => {
                const { body: { staff }, } = response;
                expect(staff.staff_id).toBe(1);
                expect(staff.first_name).toBe("Liam");
                expect(staff.last_name).toBe("Parker");
                expect(staff.email).toBe("liam.parker@company.com");
            });
        });
        test("returns 403 status code and Invalid password message", () => {
            const body = {
                email: "liam.parker@company.com",
                password: "password2",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/staff/login")
                .send(body)
                .expect(403)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Invalid password");
            });
        });
        test("returns 404 status code and User not found message if no match message", () => {
            const body = {
                email: "liam.gallagher@company.com",
                password: "password1",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/staff/login")
                .send(body)
                .expect(404)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Staff not found");
            });
        });
        test("returns 400 status code and Email and password are required message if username or password missing", () => {
            const body = {
                email: "liam.parker@company.com",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/staff/login")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Email and password are required");
            });
        });
        test("returns 400 status code and Email and password are required message if username or password missing", () => {
            const body = {
                password: "password1",
            };
            return (0, supertest_1.default)(app_1.default)
                .post("/api/staff/login")
                .send(body)
                .expect(400)
                .then((response) => {
                const { body: { msg }, } = response;
                expect(msg).toBe("Email and password are required");
            });
        });
    });
});
