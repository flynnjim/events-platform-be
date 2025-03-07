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
exports.getAllStaff = void 0;
const select_all_staff_models_1 = require("../models/select-all-staff.models");
const getAllStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield (0, select_all_staff_models_1.selectAllStaff)();
        res.status(200).json({ staff });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllStaff = getAllStaff;
