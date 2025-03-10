import { User } from "../../../types/types";

const userData: User[] = [
  {
    user_id: 1,
    username: "tech_guru",
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice.johnson@example.com",
    password_hash: "$2b$10$abcdefghijklmnopqrstuv",
  },
  {
    user_id: 2,
    username: "code_master",
    first_name: "Bob",
    last_name: "Smith",
    email: "bob.smith@example.com",
    password_hash: "$2b$10$1234567890abcdefghijklm",
  },
  {
    user_id: 3,
    username: "dev_wizard",
    first_name: "Charlie",
    last_name: "Brown",
    email: "charlie.brown@example.com",
    password_hash: "$2b$10$zyxwvutsrqponmlkjihgfedc",
  },
  {
    user_id: 4,
    username: "data_ninja",
    first_name: "Diana",
    last_name: "Lopez",
    email: "diana.lopez@example.com",
    password_hash: "$2b$10$pqrstuvwxyzabcdefghijk",
  },
  {
    user_id: 5,
    username: "cyber_hawk",
    first_name: "Ethan",
    last_name: "Walker",
    email: "ethan.walker@example.com",
    password_hash: "$2b$10$mnopqrstuvwxabcdefghijkl",
  },
];

export default userData;
