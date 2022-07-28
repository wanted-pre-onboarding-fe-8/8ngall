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
