"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const staffData = [
    {
        staff_id: 1,
        first_name: "Liam",
        last_name: "Parker",
        email: "liam.parker@company.com",
        password_hash: "password1",
    },
    {
        staff_id: 2,
        first_name: "Sophia",
        last_name: "Taylor",
        email: "sophia.taylor@company.com",
        password_hash: "password2",
    },
    {
        staff_id: 3,
        first_name: "Max",
        last_name: "Davis",
        email: "max.davis@company.com",
        password_hash: "password3",
    },
    {
        staff_id: 4,
        first_name: "Emma",
        last_name: "Wilson",
        email: "emma.wilson@company.com",
        password_hash: "password4",
    },
    {
        staff_id: 5,
        first_name: "Lucas",
        last_name: "Moore",
        email: "lucas.moore@company.com",
        password_hash: "password5",
    },
];
const saltRounds = 10;
const staffWithHashedPasswords = staffData.map((staff) => {
    const hash = bcrypt_1.default.hashSync(staff.password_hash, saltRounds);
    return {
        staff_id: staff.staff_id,
        first_name: staff.first_name,
        last_name: staff.last_name,
        email: staff.email,
        password_hash: hash,
    };
});
exports.default = staffWithHashedPasswords;
