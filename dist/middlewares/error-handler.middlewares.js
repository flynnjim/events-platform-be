"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        msg: err.msg || "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
