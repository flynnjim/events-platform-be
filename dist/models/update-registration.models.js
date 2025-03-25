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
exports.updateRegistration = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const updateRegistration = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertTuple = [body.status, body.user_id];
        const { rows } = yield connection_1.default.query("UPDATE registration SET status = $1 WHERE user_id = $2 RETURNING *;", insertTuple);
        if (rows.length === 0) {
            throw (0, error_helper_middleware_1.createError)(`User with ID ${body.user_id} not found.`, 404);
        }
        return rows[0];
    }
    catch (error) {
        if (error.status === 404) {
            throw (0, error_helper_middleware_1.createError)(error.msg, 404);
        }
        throw (0, error_helper_middleware_1.createError)("Database query failed", 500);
    }
});
exports.updateRegistration = updateRegistration;
