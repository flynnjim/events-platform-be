"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocumentation = void 0;
const getDocumentation = (req, res, next) => {
    const documentation = require("../../endpoints.json");
    res.status(200).json(documentation);
};
exports.getDocumentation = getDocumentation;
