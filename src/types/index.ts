import { WEEKDAYS } from '../utils/constants/days';
const { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY } = WEEKDAYS;

export type Weekdays =
  | typeof MONDAY
  | typeof TUESDAY
  | typeof WEDNESDAY
  | typeof THURSDAY
  | typeof FRIDAY
  | typeof SATURDAY
  | typeof SUNDAY;

export interface ISchedule {
  id?: number;
  weekday: Weekdays;
  start: string;
  end: string;
}
export type ISchedules = ISchedule[];

export interface ServerSideSchedule {
  id: number;
  weekday: Weekdays;
  start: string;
  end: string;
}
export type ServerSideSchedules = ServerSideSchedule[];

export interface ServerSideScheduleWrapper {
  [key: string]: ServerSideSchedules;
  monday: ServerSideSchedules;
  tuesday: ServerSideSchedules;
  wednesday: ServerSideSchedules;
  thursday: ServerSideSchedules;
  friday: ServerSideSchedules;
  saturday: ServerSideSchedules;
  sunday: ServerSideSchedules;
}
