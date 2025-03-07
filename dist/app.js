"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const index_controllers_1 = require("./controllers/index.controllers");
const error_handler_middlewares_1 = require("./middlewares/error-handler.middlewares");
app.get("/api/users", index_controllers_1.getUsers);
app.get("/api/users/:user_id", index_controllers_1.getSingleUser);
app.get("/api/events", index_controllers_1.getAllEvents);
app.get("/api/events/:event_id", index_controllers_1.getSingleEvent);
app.get("/api/users/registered/:event_id", index_controllers_1.getRegisteredUsers);
app.get("/api/staff", index_controllers_1.getAllStaff);
app.all("*", (request, response) => {
    response
        .status(404)
        .send({ msg: "Sorry, the endpoint you are searching for does not exist." });
});
app.use(error_handler_middlewares_1.errorHandler);
exports.default = app;
