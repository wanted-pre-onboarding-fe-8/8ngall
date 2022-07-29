import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CButton from '../../components/cButton';
import styled from 'styled-components';
import StartTimeSelector from './StartTimeSelector';
import { objectToString24, string12ToObject } from '../../utils/dateTimeHelper';
import RepeatButton from './RepeatButton';
import { getWeekdayItem, setWeekdayItem } from '../../utils/storage';
import { useAddSchedule } from '../../queries/schedule';

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
  const [selectedWeekDays, setSelectedWeekDays] = useState<Set<string>>(new Set<string>());
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  const resetRepeatButton = () => {
    setSelectedWeekDays(new Set<string>());
  };

  useEffect(() => {
    const localstorageItem = getWeekdayItem();
    const parsingItem = JSON.parse(localstorageItem || '[]');
    setSelectedWeekDays(new Set(parsingItem));
  }, []);

  const handleTimeChange = (startTimeString12: string, endTimeString12: string) => {
    const startDate = string12ToObject(startTimeString12);
    const endDate = string12ToObject(endTimeString12);
    setSchedule({ start: startDate, end: endDate });
    resetRepeatButton();
  };

  const handleRepeatButtonClick: ChangeEventHandler<HTMLInputElement> = (event) => {
    const week = event.target.value.toLowerCase();
    const prevSelectedDays = new Set<string>(selectedWeekDays);
    if (selectedWeekDays.has(week)) {
      prevSelectedDays.delete(week);
    } else {
      prevSelectedDays.add(week);
    }
    setSelectedWeekDays(prevSelectedDays);
    setWeekdayItem(prevSelectedDays);
  };

  const handleSaveSchedules = async (time: scheduleTime, weekdays: Set<string>) => {
    const startTime = objectToString24(time.start);
    const endTime = objectToString24(time.end);
    weekdays.forEach(async (weekday) => {
      const scheduleList: string[] = [];
      scheduleList.push(weekday, startTime, endTime);
      const weekValue = scheduleList[0];
      const startValue = scheduleList[1];
      const endValue = scheduleList[2];
      await mutateAsync({ weekday: weekValue, start: startValue, end: endValue });
      console.log('mutateAsync아래');
    });
    console.log('forEach아래');

    confirm('시간표가 추가되었습니다.');
    return goMain();
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
                week={week}
                checked={selectedWeekDays.has(week.toLowerCase())}
                handleChange={handleRepeatButtonClick}
                key={week}
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
