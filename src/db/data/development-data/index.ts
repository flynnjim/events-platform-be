import { User, Event, Registration, Staff } from "../../../types/types";

import eventDataDefault from "./events";
import registrationDataDefault from "./registration";
import staffDataDefault from "./staff";
import usersWithHashedPasswords from "./users";

export const eventData: Event[] = eventDataDefault;
export const registrationData: Registration[] = registrationDataDefault;
export const staffData: Staff[] = staffDataDefault;
export const userData: User[] = usersWithHashedPasswords;

export default {
  eventData,
  userData,
  staffData,
  registrationData,
};
