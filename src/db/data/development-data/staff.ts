import bcrypt from "bcrypt";
import { Staff } from "../../../types/types";

const staffData: Staff[] = [
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
    last_name: "Adams",
    email: "sophia.adams@company.com",
    password_hash: "password2",
  },
  {
    staff_id: 3,
    first_name: "Ethan",
    last_name: "Brooks",
    email: "ethan.brooks@company.com",
    password_hash: "password3",
  },
  {
    staff_id: 4,
    first_name: "Olivia",
    last_name: "Scott",
    email: "olivia.scott@company.com",
    password_hash: "password4",
  },
  {
    staff_id: 5,
    first_name: "Lucas",
    last_name: "Morris",
    email: "lucas.morris@company.com",
    password_hash: "password5",
  },
  {
    staff_id: 6,
    first_name: "Amelia",
    last_name: "Green",
    email: "amelia.green@company.com",
    password_hash: "password6",
  },
  {
    staff_id: 7,
    first_name: "Aiden",
    last_name: "Martinez",
    email: "aiden.martinez@company.com",
    password_hash: "password7",
  },
  {
    staff_id: 8,
    first_name: "Mia",
    last_name: "Taylor",
    email: "mia.taylor@company.com",
    password_hash: "password8",
  },
  {
    staff_id: 9,
    first_name: "James",
    last_name: "Wilson",
    email: "james.wilson@company.com",
    password_hash: "password9",
  },
  {
    staff_id: 10,
    first_name: "Charlotte",
    last_name: "Davis",
    email: "charlotte.davis@company.com",
    password_hash: "password10",
  },
  {
    staff_id: 11,
    first_name: "Mason",
    last_name: "Thompson",
    email: "mason.thompson@company.com",
    password_hash: "password11",
  },
  {
    staff_id: 12,
    first_name: "Isabella",
    last_name: "Garcia",
    email: "isabella.garcia@company.com",
    password_hash: "password12",
  },
  {
    staff_id: 13,
    first_name: "Jackson",
    last_name: "Hernandez",
    email: "jackson.hernandez@company.com",
    password_hash: "password13",
  },
  {
    staff_id: 14,
    first_name: "Harper",
    last_name: "Carter",
    email: "harper.carter@company.com",
    password_hash: "password14",
  },
  {
    staff_id: 15,
    first_name: "Lily",
    last_name: "Rodriguez",
    email: "lily.rodriguez@company.com",
    password_hash: "password15",
  },
];

const saltRounds = 10;

const staffWithHashedPasswords: Staff[] = staffData.map((staff) => {
  const hash = bcrypt.hashSync(staff.password_hash, saltRounds);
  return {
    staff_id: staff.staff_id,
    first_name: staff.first_name,
    last_name: staff.last_name,
    email: staff.email,
    password_hash: hash,
  };
});

export default staffWithHashedPasswords;
