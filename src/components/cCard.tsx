import React from 'react';
import { ServerSideSchedule } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';

interface cCardProps {
  lecture: ServerSideSchedule;
  onClick: (event: React.SyntheticEvent, id: number) => void;
}

function cCard({ lecture, onClick }: cCardProps) {
  const { id, start, end } = lecture;
  return (
    <Card>
      <Left>{`${start} ~ ${end}`}</Left>
      <Right>
        <RemoveButton onClick={(event) => onClick(event, id)}>
          <ClearIcon sx={{ fontSize: 10 }} />
        </RemoveButton>
      </Right>
    </Card>
  );
}

export default cCard;

const Card = styled.div`
  margin-top: 10px;
  position: relative;
  width: 90px;
  height: 35px;
  background-color: #ececec;
  border-radius: 5px;
  &:hover {
    transition-duration: 300ms;
    box-shadow: 1px 1px 1px 1px #b1b1b1;
  }
`;

const Left = styled.div`
  font-size: 12px;
  padding: 2px 5px;
  color: #7c7c7c;
`;

const Right = styled.div``;

const RemoveButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #ababab;
  color: #fff;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
