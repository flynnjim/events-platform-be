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
exports.insertEvent = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const utils_1 = require("../db/seeds/utils");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const insertEvent = (created_by, newEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const staffId = Number(created_by);
    if (isNaN(staffId)) {
        throw (0, error_helper_middleware_1.createError)("Invalid staff id", 400);
    }
    try {
        const convertedEvent = (0, utils_1.convertTimestampToDate)(newEvent);
        const insertTuple = [
            convertedEvent.title,
            convertedEvent.description,
            convertedEvent.details,
            convertedEvent.location,
            convertedEvent.address,
            staffId,
            convertedEvent.start_time.toISOString(),
            convertedEvent.end_time.toISOString(),
        ];
        const { rows } = yield connection_1.default.query("INSERT INTO events (title, description, details, location, address, created_by, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;", insertTuple);
        return rows.length > 0 ? rows[0] : null;
    }
    catch (error) {
        // foreign key violation
        if (error.code === "23503") {
            throw (0, error_helper_middleware_1.createError)(`Staff member with ID ${staffId} does not exist.`, 404);
        }
        throw (0, error_helper_middleware_1.createError)("Database query failed", 500);
    }
});
exports.insertEvent = insertEvent;
