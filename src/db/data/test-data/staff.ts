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
