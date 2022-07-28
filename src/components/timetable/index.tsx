import React from 'react';
import CCard from '../cCard';
import styled from 'styled-components';
import { ServerSideScheduleWrapper, ServerSideSchedule } from '../../types';

interface TimetableProps {
  schedules: ServerSideScheduleWrapper | [];
}

function Timetable({ schedules }: TimetableProps) {
  const [, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      {Object.entries(schedules).map(([day, lectures]) => (
        <Day key={day}>
          <DayTitle>{day}</DayTitle>
          <Divider />
          <Schedule>
            {lectures.map((lecture: ServerSideSchedule) => (
              <CCard key={lecture.id} lecture={lecture} onClick={handleOpenModal}></CCard>
            ))}
          </Schedule>
        </Day>
      ))}
    </Container>
  );
}

export default Timetable;

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 1px 3px 1px 1px #b1b1b1;
  display: flex;
`;

const DayTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Schedule = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Divider = styled.div`
  padding: 0px 10px;
  border-bottom: 1px solid #b1b1b1;
`;

const Day = styled.div`
  width: 17%;
  min-width: 100px;
`;
