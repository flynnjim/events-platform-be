"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = exports.createError = void 0;
const createError = (msg, status) => ({ msg, status });
exports.createError = createError;
const notFoundError = (resource) => (0, exports.createError)(`${resource} not found`, 404);
exports.notFoundError = notFoundError;
