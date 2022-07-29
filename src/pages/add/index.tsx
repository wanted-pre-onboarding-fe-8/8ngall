import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CButton from '../../components/cButton';
import styled from 'styled-components';
import StartTimeSelector from './StartTimeSelector';
import { checkSchedules, objectToString24, string12ToObject } from '../../utils/dateTimeHelper';
import RepeatButton from './RepeatButton';
import { clearStorage, getWeekdayItem, setWeekdayItem } from '../../utils/storage';
import { useAddSchedule, useGetSchedules } from '../../queries/schedule';
import { Weekdays } from '../../types';

interface scheduleTime {
  start: Date;
  end: Date;
}
const DEFAULT_TIME: scheduleTime = {
  start: new Date(),
  end: new Date(),
};

export default function Add() {
  const { mutateAsync } = useAddSchedule();
  const [schedule, setSchedule] = useState<scheduleTime>(DEFAULT_TIME);
  const [selectedWeekDays, setSelectedWeekDays] = useState<Set<Weekdays>>(new Set());
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  const resetRepeatButton = () => {
    setSelectedWeekDays(new Set());
    setWeekdayItem(new Set());
  };

  useEffect(() => {
    const localstorageItem = getWeekdayItem();
    const parsingItem = JSON.parse(localstorageItem || '[]');
    setSelectedWeekDays(new Set(parsingItem));
  }, []);

  const { data: schedules } = useGetSchedules();
  const [unavailableDays, setUnavailableDays] = useState<Weekdays[]>([]);
  useEffect(() => {
    if (schedules) {
      const days = checkSchedules(schedules, schedule);
      setUnavailableDays(days as Weekdays[]);
    }
  }, [schedules, schedule]);

  const handleTimeChange = (startTimeString12: string, endTimeString12: string) => {
    const startDate = string12ToObject(startTimeString12);
    const endDate = string12ToObject(endTimeString12);
    setSchedule({ start: startDate, end: endDate });
    resetRepeatButton();
  };

  const handleRepeatButtonClick: ChangeEventHandler<HTMLInputElement> = (event) => {
    const week = event.target.value.toLowerCase() as Weekdays;
    const prevSelectedDays = new Set<Weekdays>(selectedWeekDays);
    if (selectedWeekDays.has(week)) {
      prevSelectedDays.delete(week);
    } else {
      prevSelectedDays.add(week);
    }
    setSelectedWeekDays(prevSelectedDays);
    setWeekdayItem(prevSelectedDays);
  };

  const handleSaveSchedules = async (time: scheduleTime, weekdays: Set<Weekdays>) => {
    if (selectedWeekDays.size === 0) {
      alert('추가할 요일을 선택해주세요.');
      return;
    }

    const startTime = objectToString24(time.start);
    const endTime = objectToString24(time.end);
    for (const weekday of weekdays) {
      await mutateAsync({ weekday, start: startTime, end: endTime });
    }
    alert('시간표가 추가되었습니다.');
    clearStorage();
    goMain();
  };
  return (
    <Wrapper>
      <Title>Add Class schedule</Title>
      <Container>
        <Div>
          <ListTitle>Start time</ListTitle>
          <StartTimeSelector handleTimeChange={handleTimeChange} />
        </Div>
        <Div>
          <ListTitle>Repeat on</ListTitle>
          <Div>
            {WEEKS.map((week) => (
              <RepeatButton
                key={week}
                week={week}
                checked={selectedWeekDays.has(week.toLowerCase() as Weekdays)}
                handleChange={handleRepeatButtonClick}
                isUnavailable={unavailableDays.includes(week.toLowerCase() as Weekdays)}
              />
            ))}
          </Div>
        </Div>
      </Container>
      <ButtonDiv>
        <CButton
          name={'save'}
          onClick={() => handleSaveSchedules(schedule, selectedWeekDays)}
        ></CButton>
      </ButtonDiv>
    </Wrapper>
  );
}

const WEEKS = ['Monday', 'TuesDay', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Wrapper = styled.div`
  padding: 30px 80px;
`;

const ListTitle = styled.div`
  width: 100px;
`;

const ButtonDiv = styled.div`
  margin-top: 20px;
  float: right;
`;

const Div = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  margin-top: 20px;
  height: 200px;
  background-color: #fff;
  box-shadow: 1px 3px 1px 1px #b1b1b1;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
