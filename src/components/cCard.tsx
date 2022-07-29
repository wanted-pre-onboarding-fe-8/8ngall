import React from 'react';
import { ServerSideSchedule } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { string24ToString12 } from '../utils/dateTimeHelper';

interface cCardProps {
  lecture: ServerSideSchedule;
  onClick: (id: number) => void;
}

function cCard({ lecture, onClick }: cCardProps) {
  const { id, start, end } = lecture;

  const startTime = string24ToString12(start);
  const endTime = string24ToString12(end);

  return (
    <Container>
      <Times>
        <Time>{startTime} -</Time>
        <Time>{endTime}</Time>
      </Times>
      <StyledClearIcon sx={{ fontSize: 11 }} onClick={() => onClick(id)} />
    </Container>
  );
}

export default cCard;

const Container = styled.div`
  margin: 6px 0;
  padding: 6px;
  border-radius: 4px;
  background-color: #efeeef;
  display: flex;
  gap: 4px;
  flex-direction: row;
`;
const Times = styled.div``;
const Time = styled.div`
  color: #747474;
`;
const StyledClearIcon = styled(ClearIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b4b4b4;
  color: #efeeef;
  border-radius: 50%;
  cursor: pointer;
`;
