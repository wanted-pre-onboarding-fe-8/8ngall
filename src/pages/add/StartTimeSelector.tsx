import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HOURS,
  MINUTES,
  AM,
  PM,
  typeTimeType,
  combineString12,
  calcEndTime,
} from '../../utils/dateTimeHelper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
    },
  },
};

interface IStartTimeSelector {
  handleTimeChange: (startTimeString12: string, endTimeString12: string) => void;
}

export default function StartTimeSelector({ handleTimeChange }: IStartTimeSelector) {
  const [timeType, setTimeType] = useState<typeTimeType>(AM);
  const [hourIndex, setHourIndex] = useState(0);
  const [minuteIndex, setMinuteIndex] = useState(0);
  const hours = HOURS;
  const minutes = MINUTES;

  const handleHourChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setHourIndex(+value);
  };
  const handleMinuteChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setMinuteIndex(+value);
  };
  const handleTypeChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment === null) return;
    setTimeType(newAlignment as typeTimeType);
  };

  useEffect(() => {
    const startHour = hours[hourIndex];
    const startMinute = minutes[minuteIndex];
    const startTimeString = combineString12(timeType, startHour, startMinute);
    const endTimeString = calcEndTime(startTimeString);
    handleTimeChange(startTimeString, endTimeString);
  }, [timeType, hourIndex, minuteIndex]);

  return (
    <Wrapper>
      <Select value={hourIndex + ''} onChange={handleHourChange} MenuProps={MenuProps} size='small'>
        {hours.map((hour, index) => (
          <MenuItem key={index} value={index}>
            {hour}
          </MenuItem>
        ))}
      </Select>
      <Colon>:</Colon>
      <Select
        value={minuteIndex + ''}
        onChange={handleMinuteChange}
        MenuProps={MenuProps}
        size='small'
      >
        {minutes.map((hour, index) => (
          <MenuItem key={index} value={index}>
            {hour}
          </MenuItem>
        ))}
      </Select>
      <StyledToggleButtonGroup value={timeType} exclusive onChange={handleTypeChange}>
        <ToggleButton value={AM}>{AM}</ToggleButton>
        <ToggleButton value={PM}>{PM}</ToggleButton>
      </StyledToggleButtonGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Colon = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin-left: 20px;
`;
