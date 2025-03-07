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
exports.getSingleEvent = void 0;
const select_single_event_models_1 = require("../models/select-single-event.models");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const getSingleEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { event_id } = req.params;
        if (!/^\d+$/.test(event_id)) {
            return next((0, error_helper_middleware_1.createError)("Bad request", 400));
        }
        const event = yield (0, select_single_event_models_1.selectSingleEvent)(event_id);
        if (!event) {
            return next((0, error_helper_middleware_1.notFoundError)("Event"));
        }
        res.status(200).json({ event });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleEvent = getSingleEvent;
