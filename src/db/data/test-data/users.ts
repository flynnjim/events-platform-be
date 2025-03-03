interface User {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  user_type: "staff" | "user";
}

const users: User[] = [
  {
    user_id: 1,
    username: "tech_guru",
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice.johnson@example.com",
    password_hash: "$2b$10$abcdefghijklmnopqrstuv",
    user_type: "user",
  },
  {
    user_id: 2,
    username: "code_master",
    first_name: "Bob",
    last_name: "Smith",
    email: "bob.smith@example.com",
    password_hash: "$2b$10$1234567890abcdefghijklm",
    user_type: "staff",
  },
  {
    user_id: 3,
    username: "dev_wizard",
    first_name: "Charlie",
    last_name: "Brown",
    email: "charlie.brown@example.com",
    password_hash: "$2b$10$zyxwvutsrqponmlkjihgfedc",
    user_type: "user",
  },
  {
    user_id: 4,
    username: "data_ninja",
    first_name: "Diana",
    last_name: "Lopez",
    email: "diana.lopez@example.com",
    password_hash: "$2b$10$pqrstuvwxyzabcdefghijk",
    user_type: "staff",
  },
  {
    user_id: 5,
    username: "cyber_hawk",
    first_name: "Ethan",
    last_name: "Walker",
    email: "ethan.walker@example.com",
    password_hash: "$2b$10$mnopqrstuvwxabcdefghijkl",
    user_type: "user",
  },
];

export default users;
