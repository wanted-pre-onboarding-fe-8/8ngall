import React from 'react';
import CButton from '../components/cButton';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router';

export default function AddClass() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  const [active, setActive] = React.useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <Title>Add Class schedule</Title>
      <Container>
        <Div>
          <ListTitle>Start time</ListTitle>
          <FlexDiv>
            <Time>00</Time>
            <Span>:</Span>
            <div>
              <DropDown>
                00
                <ArrowDropDownIcon />
              </DropDown>
              <DropDownContent>
                {TIME_ARRAY.map((time, index) => (
                  <LeftTime key={index}>
                    <span style={{ paddingLeft: 12 }}>{time}</span>
                  </LeftTime>
                ))}
              </DropDownContent>
            </div>
          </FlexDiv>
          <div>
            <DayTime>AM</DayTime>
            <DayTime>PM</DayTime>
          </div>
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

const TIME_ARRAY = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

const WEEKS = ['Monday', 'TuesDay', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Wrapper = styled.div`
  padding: 30px 80px;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 30px;
`;

const ListTitle = styled.div`
  width: 100px;
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50px;
  height: 30px;
  border: 0.5px solid #b1b1b1;
  font-size: 12px;
  text-align: center;
`;

const DropDownContent = styled.div`
  /* display: none; */
  position: absolute;
  z-index: 1;
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

const LeftTime = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 12px;
  width: 50px;
  height: 30px;
  border: 0.5px solid #b1b1b1;
  background-color: #fff;
  /* padding-left: 11px; */
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 50px;
  height: 30px;
  border: 0.5px solid #b1b1b1;
  background-color: #fff;
`;
const DayTime = styled.button`
  font-size: 12px;
  width: 50px;
  height: 30px;
  outline: 0;
  color: #fff;
  background-color: #8a8a8a;
  border: 0.5px solid #b1b1b1;
  margin: 10px;
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
