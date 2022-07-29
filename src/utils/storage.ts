import { typeTimeType } from './dateTimeHelper';

const KEY_HOUR = 'hour';
const KEY_MINUTE = 'minute';
const KEY_TIMETYPE = 'timeType';
const KEY_WEEKDAYS = 'weekdays';

export function getHourIndexItem(defaultValue: string) {
  return getStorageItem(KEY_HOUR, defaultValue);
}
export function getMinuteIndexItem(defaultValue: string) {
  return getStorageItem(KEY_MINUTE, defaultValue);
}
export function getTimeTypeItem(defaultValue: string) {
  return getStorageItem(KEY_TIMETYPE, defaultValue);
}
export function getWeekdayItem() {
  return getStorageItem(KEY_WEEKDAYS, '');
}

function getStorageItem(key: string, defaultValue: string) {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === 'null') {
      return defaultValue;
    }
    return value;
  } catch {
    return defaultValue;
  }
}

export function setHourIndexItem(hour: string) {
  setStorageItem(KEY_HOUR, hour);
}
export function setMinuteIndexItem(minute: string) {
  setStorageItem(KEY_MINUTE, minute);
}
export function setTimeTypeItem(timeType: typeTimeType) {
  setStorageItem(KEY_TIMETYPE, timeType);
}

export function setWeekdayItem(selectedWeekdays: Set<string>) {
  setStorageItem(KEY_WEEKDAYS, JSON.stringify([...selectedWeekdays]));
}

function setStorageItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

export function clearStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.log(e);
  }
}
