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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEvents = void 0;
const select_all_events_models_1 = require("../models/select-all-events.models");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const VALID_CATEGORIES = ["Tech", "Sport", "Culture"];
const getAllEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.query;
        let events;
        if (category) {
            const categoryStr = category.toString();
            if (!VALID_CATEGORIES.includes(categoryStr)) {
                return next((0, error_helper_middleware_1.createError)("Invalid category selected", 400));
            }
            events = yield (0, select_all_events_models_1.selectEventsByCategory)(category);
        }
        else {
            events = yield (0, select_all_events_models_1.selectAllEvents)();
        }
        res.status(200).json({ events });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllEvents = getAllEvents;
