import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CButton from '../components/cButton';
import Timetable from '../components/timetable';
import { ServerSideScheduleWrapper } from '../types';

export default function Main() {
  const navigate = useNavigate();
  const [schedules, setSchedules] = React.useState<ServerSideScheduleWrapper | []>([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/schedules?_sort=start&_order=asc')
      .then((response) => response.json())
      .then(({ schedules }) => setSchedules(schedules));
  }, []);

  const goAddClass = () => {
    navigate('/add');
  };

  return (
    <Wrapper>
      <Header>
        <Title>Class schedule</Title>
        <CButton name={'Add Class schedule'} onClick={goAddClass} />
      </Header>
      {schedules && <Timetable schedules={schedules} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
