import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';

export default function CCard({ data, onClick }: any) {
  return (
    <Card>
      <Left>{data}</Left>
      <Right>
        <RemoveButton onClick={onClick}>
          <ClearIcon sx={{ fontSize: 10 }} />
        </RemoveButton>
      </Right>
    </Card>
  );
}
const Left = styled.div`
  font-size: 12px;
  padding: 2px 5px;
  color: #7c7c7c;
  /* font-weight: 500; */
`;
const Right = styled.div``;

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
