import { format, addMinutes, compareAsc } from 'date-fns';
import { ServerSideScheduleWrapper } from '../types';

export const HOURS = ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
export const MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
export const AM = 'AM';
export const PM = 'PM';
export type typeTimeType = typeof AM | typeof PM;

export function calcEndTime(string12: string) {
  const now = string12ToObject(string12);
  const end = addMinutes(now, 40);
  return objectToString12(end);
}

export function string12ToObject(string12: string) {
  const [hour, minute, timeType] = splitString12(string12);

  const now = new Date();
  const offset = timeType === PM ? (+hour !== 12 ? 12 : 0) : +hour === 12 ? -12 : 0;
  now.setHours(+hour + offset);
  now.setMinutes(+minute);
  now.setSeconds(0);
  return now;
}
export function objectToString12(date: Date) {
  const hour = date.getHours();
  const timeType = hour < 12 ? AM : PM;
  return `${format(date, 'hh:mm')} ${timeType}`;
}

export function string24ToObject(string24: string) {
  const [hour, minute] = splitString24(string24);

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);
  now.setSeconds(0);
  return now;
}
export function objectToString24(date: Date) {
  return `${format(date, 'HH:mm')}`;
}

export function string12ToString24(string12: string) {
  const date = string12ToObject(string12);
  return objectToString24(date);
}
export function string24ToString12(string24: string) {
  const date = string24ToObject(string24);
  return objectToString12(date);
}

export function splitString12(string12: string) {
  const time = string12.split(' ')[0];
  const timeType = string12.split(' ')[1];
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];
  return [hour, minute, timeType];
}
export function combineString12(hour: string, minute: string, timeType: typeTimeType) {
  return `${hour}:${minute} ${timeType}`;
}

export function splitString24(string24: string) {
  const hour = string24.split(':')[0];
  const minute = string24.split(':')[1];
  return [hour, minute];
}
export function combineString24(hour: string, minute: string) {
  return `${hour}:${minute}`;
}

export function checkSchedules(
  totalSchedules: ServerSideScheduleWrapper,
  selectedSchedule: {
    start: Date;
    end: Date;
  },
) {
  const unavailableDays = [];
  const { start, end } = selectedSchedule;
  const weeks = Object.keys(totalSchedules);
  for (const day of weeks) {
    const daySchedules = totalSchedules[day];
    for (const daySchedule of daySchedules) {
      const { start: dayStart, end: dayEnd } = daySchedule;
      const dayStartObj = string24ToObject(dayStart);
      const dayEndObj = string24ToObject(dayEnd);

      if (compareAsc(start, dayStartObj) === 1) {
        if (compareAsc(start, dayEndObj) === -1) {
          unavailableDays.push(day);
          break;
        }
      }
      if (compareAsc(end, dayStartObj) === 1) {
        if (compareAsc(end, dayEndObj) === -1) {
          unavailableDays.push(day);
          break;
        }
      }
      if (start.getHours() === dayStartObj.getHours()) {
        unavailableDays.push(day);
        break;
      }
    }
  }

  return unavailableDays;
}
