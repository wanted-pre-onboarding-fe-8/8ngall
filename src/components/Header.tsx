import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src='logo.png' alt='logo' onClick={() => navigate('/')} />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 66px;
  background-color: #259dbe;
  padding: 0px 80px;
`;

const Logo = styled.img`
  padding-top: 8px;
  width: 76px;
  cursor: pointer;
`;
