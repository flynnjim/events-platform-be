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
exports.insertRegistration = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const utils_1 = require("../db/seeds/utils");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const insertRegistration = (newRegistration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const convertedRegistration = (0, utils_1.convertRegistrationTimestampToDate)(newRegistration);
        const insertTuple = [
            convertedRegistration.user_id,
            convertedRegistration.event_id,
            convertedRegistration.registration_date,
            convertedRegistration.status,
        ];
        const { rows } = yield connection_1.default.query("INSERT INTO registration (user_id, event_id, registration_date, status) VALUES ($1, $2, $3, $4) RETURNING *;", insertTuple);
        return rows.length > 0 ? rows[0] : null;
    }
    catch (error) {
        if (error.code === "23503") {
            throw (0, error_helper_middleware_1.createError)(`User with ID ${newRegistration.user_id} does not exist.`, 404);
        }
        throw (0, error_helper_middleware_1.createError)("Database query failed", 500);
    }
});
exports.insertRegistration = insertRegistration;
