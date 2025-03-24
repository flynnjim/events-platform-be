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
        password: "password1",
    },
    {
        user_id: 2,
        username: "web_dev_123",
        first_name: "John",
        last_name: "Smith",
        email: "john.smith@example.com",
        password: "password2",
    },
    {
        user_id: 3,
        username: "cyber_wiz",
        first_name: "Olivia",
        last_name: "Taylor",
        email: "olivia.taylor@example.com",
        password: "password3",
    },
    {
        user_id: 4,
        username: "dev_master",
        first_name: "James",
        last_name: "Brown",
        email: "james.brown@example.com",
        password: "password4",
    },
    {
        user_id: 5,
        username: "design_queen",
        first_name: "Sophia",
        last_name: "Williams",
        email: "sophia.williams@example.com",
        password: "password5",
    },
    {
        user_id: 6,
        username: "data_expert",
        first_name: "Liam",
        last_name: "Davis",
        email: "liam.davis@example.com",
        password: "password6",
    },
    {
        user_id: 7,
        username: "ai_enthusiast",
        first_name: "Mia",
        last_name: "Miller",
        email: "mia.miller@example.com",
        password: "password7",
    },
    {
        user_id: 8,
        username: "coding_ninja",
        first_name: "Ethan",
        last_name: "Garcia",
        email: "ethan.garcia@example.com",
        password: "password8",
    },
    {
        user_id: 9,
        username: "frontend_hero",
        first_name: "Charlotte",
        last_name: "Martinez",
        email: "charlotte.martinez@example.com",
        password: "password9",
    },
    {
        user_id: 10,
        username: "backend_guru",
        first_name: "Aiden",
        last_name: "Rodriguez",
        email: "aiden.rodriguez@example.com",
        password: "password10",
    },
    {
        user_id: 11,
        username: "tech_savvy",
        first_name: "Amelia",
        last_name: "Hernandez",
        email: "amelia.hernandez@example.com",
        password: "password11",
    },
    {
        user_id: 12,
        username: "programming_pro",
        first_name: "Lucas",
        last_name: "Lopez",
        email: "lucas.lopez@example.com",
        password: "password12",
    },
    {
        user_id: 13,
        username: "software_king",
        first_name: "Isabella",
        last_name: "Gonzalez",
        email: "isabella.gonzalez@example.com",
        password: "password13",
    },
    {
        user_id: 14,
        username: "dev_ace",
        first_name: "Mason",
        last_name: "Wilson",
        email: "mason.wilson@example.com",
        password: "password14",
    },
    {
        user_id: 15,
        username: "tech_goddess",
        first_name: "Harper",
        last_name: "Anderson",
        email: "harper.anderson@example.com",
        password: "password15",
    },
];
const saltRounds = 10;
// Generate a new user data array with hashed passwords
const usersWithHashedPasswords = usersWithRawPasswords.map((user) => {
    // Synchronously hash the password
    const hash = bcrypt_1.default.hashSync(user.password, saltRounds);
    // Return a new user object with the password_hash and remove the raw password
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
