import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import CButton from '../../components/cButton';
import styled from 'styled-components';
import StartTimeSelector from './StartTimeSelector';
import { objectToString24, string12ToObject } from '../../utils/dateTimeHelper';
import RepeatButton from './RepeatButton';

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
  const selectedDays = useRef<Set<string>>(new Set<string>());
  const formRef = useRef<HTMLFormElement>(null);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    formRef.current?.reset();
    selectedDays.current.clear();
    console.log(selectedDays.current);
  }, [buttonClick]);

  const handleSubmit = () => {
    console.log(selectedDays.current);
    // goMain();
  };

  const handleClick = (week: string) => {
    if (selectedDays.current.has(week)) {
      selectedDays.current.delete(week);
    } else {
      6840;

      selectedDays.current.add(week);
    }
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
            <Form ref={formRef}>
              {WEEKS.map((week) => (
                <RepeatButton
                  week={week}
                  handleClick={() => {
                    handleClick(week);
                  }}
                  key={week}
                />
              ))}
            </Form>
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

const Form = styled.form``;
