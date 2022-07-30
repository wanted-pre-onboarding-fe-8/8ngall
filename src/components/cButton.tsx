import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

export default function CButton({ name, onClick }: ButtonProps) {
  return <Button onClick={onClick}>{name}</Button>;
}

const Button = styled.button`
  background-color: #1a6ace;
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 5px;
  width: fit-content;
  padding: 0 20px;
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;
