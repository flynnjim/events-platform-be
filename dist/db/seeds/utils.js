"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRegistrationTimestampToDate = exports.convertTimestampToDate = void 0;
const convertTimestampToDate = (event) => (Object.assign(Object.assign({}, event), { start_time: event.start_time ? new Date(event.start_time) : undefined, end_time: event.end_time ? new Date(event.end_time) : undefined }));
exports.convertTimestampToDate = convertTimestampToDate;
const convertRegistrationTimestampToDate = (registration) => {
    return Object.assign(Object.assign({}, registration), { registration_date: new Date(registration.registration_date) });
};
exports.convertRegistrationTimestampToDate = convertRegistrationTimestampToDate;
