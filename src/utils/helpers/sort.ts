import compareAsc from 'date-fns/compareAsc';
import compareDesc from 'date-fns/compareDesc';
import { ServerSideSchedules } from '../../types';
import { BASE_DATE_TO_PARSE_TIME } from '../constants/time';

interface SortLecturesParam {
  lectures: ServerSideSchedules;
  type?: 'asc' | 'desc';
}
function sortLecturesByStartTime({ lectures, type = 'asc' }: SortLecturesParam) {
  return lectures.sort((timeLeft, timeRight) => {
    const parsedTimeLeft = new Date(`${BASE_DATE_TO_PARSE_TIME}${timeLeft.start}`);
    const parsedTimeRight = new Date(`${BASE_DATE_TO_PARSE_TIME}${timeRight.start}`);

    if (type === 'desc') {
      return compareDesc(parsedTimeLeft, parsedTimeRight);
    }
    return compareAsc(parsedTimeLeft, parsedTimeRight);
  });
}

export { sortLecturesByStartTime };
