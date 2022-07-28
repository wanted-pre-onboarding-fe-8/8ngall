import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import styled from 'styled-components';

export default function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;
