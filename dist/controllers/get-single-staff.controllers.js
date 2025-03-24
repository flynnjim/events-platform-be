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
exports.getSingleStaff = void 0;
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const select_single_staff_models_1 = require("../models/select-single-staff.models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getSingleStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { staff_id } = req.params;
        const { password } = req.query;
        if (!/^\d+$/.test(staff_id)) {
            return next((0, error_helper_middleware_1.createError)("Bad request", 400));
        }
        const staff = yield (0, select_single_staff_models_1.selectSingleStaff)(staff_id);
        if (!staff) {
            return next((0, error_helper_middleware_1.notFoundError)("Staff"));
        }
        if (!password) {
            return next((0, error_helper_middleware_1.createError)("Password query parameter is required", 400));
        }
        const isMatch = yield bcrypt_1.default.compare(password, staff.password_hash);
        if (!isMatch) {
            return next((0, error_helper_middleware_1.createError)("Invalid password", 403));
        }
        res.status(200).json({ staff });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleStaff = getSingleStaff;
