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
exports.getUserLogin = void 0;
const get_users_by_username_models_1 = require("../models/get-users-by-username.models");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (userId) => {
    return jsonwebtoken_1.default.sign({ user_id: userId }, process.env.JWT_SECRET || "your-secret-key", { expiresIn: "1h" });
};
const getUserLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return next((0, error_helper_middleware_1.createError)("Username and password are required", 400));
        }
        const user = yield (0, get_users_by_username_models_1.getUserByUsername)(username);
        if (!user) {
            return next((0, error_helper_middleware_1.notFoundError)("User"));
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password_hash);
        if (!isMatch) {
            return next((0, error_helper_middleware_1.createError)("Invalid password", 403));
        }
        const token = generateJWT(user.user_id);
        res.status(201).json({ token, user });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserLogin = getUserLogin;
