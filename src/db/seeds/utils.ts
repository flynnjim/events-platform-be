import { Registration } from "../../types/types";

export const convertTimestampToDate = <
  T extends { start_time?: number; end_time?: number }
>(
  event: T
): T & { start_time?: Date; end_time?: Date } => ({
  ...event,
  start_time: event.start_time ? new Date(event.start_time) : undefined,
  end_time: event.end_time ? new Date(event.end_time) : undefined,
});

export const convertRegistrationTimestampToDate = (
  registration: Registration
) => {
  return {
    ...registration,
    registration_date: new Date(registration.registration_date),
  };
};
