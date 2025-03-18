"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRegistrationPatch = exports.isValidRegistrationBody = exports.isValidEventPatch = exports.isValidNewEventBody = void 0;
const isValidNewEventBody = (body) => {
    return (typeof body.title === "string" &&
        typeof body.description === "string" &&
        typeof body.event_type === "string" &&
        typeof body.details === "string" &&
        typeof body.address === "string" &&
        typeof body.start_time === "number" &&
        typeof body.end_time === "number" &&
        typeof body.location === "object" &&
        body.location !== null &&
        typeof body.location.latitude === "number" &&
        typeof body.location.longitude === "number");
};
exports.isValidNewEventBody = isValidNewEventBody;
const isValidEventPatch = (body) => {
    return (typeof body.title === "string" &&
        typeof body.description === "string" &&
        typeof body.event_type === "string" &&
        typeof body.details === "string" &&
        typeof body.address === "string" &&
        typeof body.start_time === "number" &&
        typeof body.end_time === "number" &&
        typeof body.location === "object" &&
        body.location !== null &&
        typeof body.location.latitude === "number" &&
        typeof body.location.longitude === "number");
};
exports.isValidEventPatch = isValidEventPatch;
const isValidRegistrationBody = (body) => {
    return (typeof body.user_id === "number" &&
        typeof body.event_id === "number" &&
        typeof body.registration_date === "number" &&
        typeof body.status === "string");
};
exports.isValidRegistrationBody = isValidRegistrationBody;
const isValidRegistrationPatch = (body) => {
    return (typeof body.registration_id === "number" && typeof body.status === "string");
};
exports.isValidRegistrationPatch = isValidRegistrationPatch;
