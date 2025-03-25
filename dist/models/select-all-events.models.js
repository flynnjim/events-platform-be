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
exports.selectEventsByCategory = exports.selectAllEvents = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const selectAllEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield connection_1.default.query("SELECT event_id, title, description, event_type, details, location, address, created_by, start_time, end_time FROM events");
    return rows;
});
exports.selectAllEvents = selectAllEvents;
const selectEventsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield connection_1.default.query("SELECT event_id, title, description, event_type, details, location, address, created_by, start_time, end_time FROM events WHERE event_type = $1", [category]);
    return rows;
});
exports.selectEventsByCategory = selectEventsByCategory;
