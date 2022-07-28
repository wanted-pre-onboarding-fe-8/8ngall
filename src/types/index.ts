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
  id: number;
  weekday: Weekdays;
  start: Date;
  end: Date;
}
export type ISchedules = ISchedule[];

export interface ServerSideSchedule {
  id: number;
  weekday: Weekdays;
  start: string;
  end: string;
}
export type ServerSideSchedules = ServerSideSchedule[];
