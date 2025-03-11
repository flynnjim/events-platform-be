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
exports.patchEvent = void 0;
const types_1 = require("../types/types");
const error_helper_middleware_1 = require("../middlewares/error-helper.middleware");
const update_event_models_1 = require("../models/update-event.models");
const patchEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!(0, types_1.isValidEventPatch)(body)) {
            return next((0, error_helper_middleware_1.createError)("Invalid event body", 400));
        }
        const event = yield (0, update_event_models_1.updateEvent)(body);
        res.status(200).json({ event });
    }
    catch (error) {
        next(error);
    }
});
exports.patchEvent = patchEvent;
