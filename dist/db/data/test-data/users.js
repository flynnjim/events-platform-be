"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersWithRawPasswords = [
    {
        user_id: 1,
        username: "cloud_expert",
        first_name: "Jackson",
        last_name: "Thomas",
        email: "jackson.thomas@example.com",
        password_hash: "password1",
    },
    {
        user_id: 2,
        username: "web_dev_123",
        first_name: "John",
        last_name: "Smith",
        email: "john.smith@example.com",
        password_hash: "password2",
    },
    {
        user_id: 3,
        username: "cyber_wiz",
        first_name: "Olivia",
        last_name: "Taylor",
        email: "olivia.taylor@example.com",
        password_hash: "password3",
    },
    {
        user_id: 4,
        username: "dev_master",
        first_name: "James",
        last_name: "Brown",
        email: "james.brown@example.com",
        password_hash: "password4",
    },
    {
        user_id: 5,
        username: "design_queen",
        first_name: "Sophia",
        last_name: "Williams",
        email: "sophia.williams@example.com",
        password_hash: "password5",
    },
];
const saltRounds = 10;
const usersWithHashedPasswords = usersWithRawPasswords.map((user) => {
    const hash = bcrypt_1.default.hashSync(user.password_hash, saltRounds);
    return {
        user_id: user.user_id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password_hash: hash,
    };
});
exports.default = usersWithHashedPasswords;
