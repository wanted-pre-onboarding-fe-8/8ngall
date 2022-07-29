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
import {
  getHourIndexItem,
  getMinuteIndexItem,
  getTimeTypeItem,
  setHourIndexItem,
  setMinuteIndexItem,
  setTimeTypeItem,
} from '../../utils/storage';

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

const MINUTE_15_INDEX = 3;

export default function StartTimeSelector({ handleTimeChange }: IStartTimeSelector) {
  const defaultHourIndex = +getHourIndexItem('0');
  const defaultMinuteIndex = +getMinuteIndexItem('0');
  const defaultTimeType = getTimeTypeItem(AM) as typeTimeType;

  const [hourIndex, setHourIndex] = useState(defaultHourIndex);
  const [minuteIndex, setMinuteIndex] = useState(defaultMinuteIndex);
  const [timeType, setTimeType] = useState<typeTimeType>(defaultTimeType);
  const hours = HOURS;
  const minutes = MINUTES;

  const handleHourChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setHourIndex(+value);
    clearMinuteIndex(timeType, +value);
  };
  const handleMinuteChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setMinuteIndex(+value);
  };
  const handleTypeChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment === null) return;

    const type = newAlignment as typeTimeType;
    setTimeType(type);
    clearMinuteIndex(type, hourIndex);
  };

  useEffect(() => {
    const startHour = hours[hourIndex];
    const startMinute = minutes[minuteIndex];
    const startTimeString = combineString12(startHour, startMinute, timeType);
    const endTimeString = calcEndTime(startTimeString);

    setHourIndexItem(hourIndex + '');
    setMinuteIndexItem(minuteIndex + '');
    setTimeTypeItem(timeType);

    handleTimeChange(startTimeString, endTimeString);
  }, [timeType, hourIndex, minuteIndex]);

  const getIsDisabled = (minuteItemIndex: number) => {
    return timeType === PM && hourIndex === hours.length - 1 && MINUTE_15_INDEX < minuteItemIndex;
  };
  const clearMinuteIndex = (timeType: typeTimeType, hourIndex: number) => {
    if (timeType === PM && hourIndex === hours.length - 1) {
      if (MINUTE_15_INDEX < minuteIndex) {
        setMinuteIndex(MINUTE_15_INDEX);
      }
    }
  };

  return (
    <Wrapper>
      <Select
        value={hourIndex + ''}
        onChange={handleHourChange}
        MenuProps={MenuProps}
        sx={{ width: 70 }}
        size='small'
      >
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
        sx={{ width: 70 }}
        size='small'
      >
        {minutes.map((hour, index) => (
          <MenuItem key={index} value={index} disabled={getIsDisabled(index)}>
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
