import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface RepeatButtonProps {
  week: string;
  checked: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  isUnavailable: boolean;
}

function RepeatButton({ week, handleChange, checked, isUnavailable }: RepeatButtonProps) {
  return (
    <span key={week}>
      <Checkbox id={week} value={week.toLowerCase()} checked={checked} onChange={handleChange} />
      <CheckboxLabel htmlFor={week}>{week}</CheckboxLabel>
    </span>
  );
}

export default RepeatButton;

const Checkbox = styled.input.attrs({ type: 'checkbox' })<{ disabled?: boolean }>`
  display: none;
  &:checked + label {
    background-color: #b1b1b1;
    color: white;
  }
  &:disabled + label {
    cursor: default;
    color: #b1b1b1;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 130px;
  margin-right: 5px;
  height: 30px;
  outline: 0;
  text-align: center;
  background-color: #fff;
  border: 0.5px solid #b1b1b1;
  padding: 5px;
  cursor: pointer;
`;
