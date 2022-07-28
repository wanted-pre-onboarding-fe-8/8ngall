import React, { ChangeEventHandler, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import CButton from '../../components/cButton';
import styled from 'styled-components';
import StartTimeSelector from './StartTimeSelector';
import { objectToString24, string12ToObject } from '../../utils/dateTimeHelper';

interface scheduleTime {
  start: Date;
  end: Date;
}
const DEFAULT_TIME: scheduleTime = {
  start: new Date(),
  end: new Date(),
};
const weekdays = ['monday', 'friday'];
export default function Add() {
  const [schedule, setSchedule] = useState<scheduleTime>(DEFAULT_TIME);
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  const handleTimeChange = (startTimeString12: string, endTimeString12: string) => {
    const startDate = string12ToObject(startTimeString12);
    const endDate = string12ToObject(endTimeString12);
    setSchedule({ start: startDate, end: endDate });
  };
  const handleClick: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event);
  };

  const handleSaveSchedules = (time: scheduleTime, weekdays: string[]) => {
    const startTime = objectToString24(time.start);
    const endTime = objectToString24(time.end);
    weekdays.forEach((weekday) => {
      const scheduleList: string[] = [];
      scheduleList.push(weekday, startTime, endTime);
      const weekValue = scheduleList[0];
      const startValue = scheduleList[1];
      const endValue = scheduleList[2];
      // patchSchedules({ weekday: weekValue, start: startValue, end: endValue });
    });
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
              <span key={week}>
                <Checkbox id={week} value={week} onChange={handleClick} disabled />
                <CheckboxLabel htmlFor={week}>{week}</CheckboxLabel>
              </span>
            ))}
          </Div>
        </Div>
      </Container>
      <ButtonDiv>
        <CButton name={'save'} onClick={() => handleSaveSchedules(schedule, weekdays)}></CButton>
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

const Button = styled.label`
  width: 95px;
  margin-right: 5px;
  height: 30px;
  outline: 0;
  background-color: #fff;
  border: 0.5px solid #b1b1b1;
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })<{ disabled: boolean }>`
  display: none;
  &:checked + label {
    background-color: #b1b1b1;
    color: white;
  }
  &:disabled + label {
    cursor: default;
    color: #b1b1b1;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 130px;
  margin-right: 5px;
  height: 30px;
  outline: 0;
  text-align: center;
  background-color: #fff;
  border: 0.5px solid #b1b1b1;
  padding: 5px;
  cursor: pointer;
`;
