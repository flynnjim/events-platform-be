"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = exports.staffData = exports.registrationData = exports.eventData = void 0;
const events_1 = __importDefault(require("./events"));
const registration_1 = __importDefault(require("./registration"));
const staff_1 = __importDefault(require("./staff"));
const users_1 = __importDefault(require("./users"));
exports.eventData = events_1.default;
exports.registrationData = registration_1.default;
exports.staffData = staff_1.default;
exports.userData = users_1.default;
exports.default = {
    eventData: exports.eventData,
    userData: exports.userData,
    staffData: exports.staffData,
    registrationData: exports.registrationData,
};
