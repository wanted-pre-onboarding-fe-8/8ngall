import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CButton from '../components/cButton';
import CCard from '../components/cCard';

export default function Main() {
  const navigate = useNavigate();
  const [, setOpenModal] = React.useState(false);

  const goAddClass = () => {
    navigate('/add');
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Class schedule</Title>
        <CButton name={'Add Class schedule'} onClick={goAddClass} />
      </Header>
      <Container>
        {WEEK &&
          WEEK.map(({ title, value }) => (
            <Day key={title}>
              <DayTitle>{title}</DayTitle>
              <Divider />
              <Schedule>
                {value &&
                  value.map((data, index) => (
                    <CCard key={index} data={data} onClick={handleOpenModal} />
                  ))}
              </Schedule>
            </Day>
          ))}
      </Container>
    </Wrapper>
  );
}

const WEEK = [
  { title: 'Monday', value: ['10:00 AM - 10:40 AM', '10:00 AM - 10:40 AM'] },
  { title: 'Tuesday', value: [] },
  { title: 'Wednesday', value: ['10:00 AM - 10:40 AM'] },
  { title: 'Thursday', value: ['11:00 AM - 11:40 AM'] },
  { title: 'Friday', value: ['10:00 AM - 10:40 AM'] },
  { title: 'Saturday', value: ['12:20 PM - 1:40 PM'] },
  { title: 'Sunday', value: [] },
];

const Wrapper = styled.div`
  padding: 30px 80px;
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

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 1px 3px 1px 1px #b1b1b1;
  display: flex;
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

const Day = styled.div`
  width: 17%;
  min-width: 100px;
`;
