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
exports.updateEvent = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const updateEvent = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const values = [
            body.title,
            body.description,
            body.event_type,
            body.details,
            body.location,
            body.address,
            body.created_by,
            new Date(body.start_time).toISOString(),
            new Date(body.end_time).toISOString(),
            body.event_id,
        ];
        const { rows } = yield connection_1.default.query("UPDATE events SET title = $1, description = $2, event_type = $3, details = $4, location = $5, address = $6, created_by = $7, start_time = $8, end_time = $9 WHERE event_id = $10 RETURNING *;", values);
        if (rows.length === 0) {
            throw (0, error_helper_middleware_1.createError)(`Event with ID ${body.event_id} not found.`, 404);
        }
        return rows[0];
    }
    catch (error) {
        if (error.code === "23503") {
            throw (0, error_helper_middleware_1.createError)(`Staff member with ID ${body.created_by} does not exist.`, 404);
        }
        if (error.status === 404) {
            throw (0, error_helper_middleware_1.createError)(error.msg, 404);
        }
        throw (0, error_helper_middleware_1.createError)("Database query failed", 500);
    }
});
exports.updateEvent = updateEvent;
