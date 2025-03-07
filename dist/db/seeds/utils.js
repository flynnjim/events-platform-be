"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimestampToDate = void 0;
const convertTimestampToDate = (event) => (Object.assign(Object.assign({}, event), { start_time: event.start_time ? new Date(event.start_time) : undefined, end_time: event.end_time ? new Date(event.end_time) : undefined }));
exports.convertTimestampToDate = convertTimestampToDate;
