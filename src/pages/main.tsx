import React from 'react';
import { useNavigate } from 'react-router';
import { useGetSchedules } from '../queries/schedule';
import styled from 'styled-components';
import CButton from '../components/cButton';
import Timetable from '../components/timetable';
import { CircularProgress } from '@mui/material';

export default function Main() {
  const navigate = useNavigate();
  const { data: schedules, isLoading, refetch } = useGetSchedules();

  const goAddClass = () => {
    navigate('/add');
  };

  if (schedules === undefined) {
    return <></>;
  }

  return (
    <Wrapper>
      <Header>
        <Title>Class schedule</Title>
        <CButton name={'Add Class schedule'} onClick={goAddClass} />
      </Header>
      {isLoading ? <CircularProgress /> : <Timetable schedules={schedules} refetch={refetch} />}
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
