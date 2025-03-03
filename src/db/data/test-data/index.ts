import { Event } from "./events";
import { Registration } from "./registration";
import { Staff } from "./staff";
import { User } from "./users";

import eventDataDefault from "./events";
import registrationDataDefault from "./registration";
import staffDataDefault from "./staff";
import userDataDefault from "./users";

export const eventData: Event[] = eventDataDefault;
export const registrationData: Registration[] = registrationDataDefault;
export const staffData: Staff[] = staffDataDefault;
export const userData: User[] = userDataDefault;

export default {
  eventData,
  userData,
  staffData,
  registrationData,
};
