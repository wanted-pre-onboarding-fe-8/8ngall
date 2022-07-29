import React from 'react';
import CButton from '../../components/cButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import StartTimeSelector from './StartTimeSelector';

export default function Add() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  const handleTimeChange = (startTimeString12: string, endTimeString12: string) => {
    console.log(startTimeString12, endTimeString12);
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
            {WEEKS.map((week, index) => (
              <Button key={index}>{week}</Button>
            ))}
          </Div>
        </Div>
      </Container>
      <ButtonDiv>
        <CButton name={'save'} onClick={goMain}></CButton>
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

const Button = styled.button`
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
