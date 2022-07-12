import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import { InputWrapper, FullInput, FlexDivider, HalfInput, StyledLegend } from './styledComponents';

export default function ModalForm(props) {
  const { weddingInfo, editInfo } = props;

  return (
    <InputWrapper>
      <div>
        <StyledLegend>Invitation title</StyledLegend>
        <FullInput
          type='text'
          onChange={(e) => editInfo('title', e.target.value)}
          value={weddingInfo.title}
          placeholder='Save the date'
          required
        />
      </div>
      <div>
        <StyledLegend>Invitation sub title</StyledLegend>
        <FullInput
          type='text'
          onChange={(e) => editInfo('sub-title', e.target.value)}
          value={weddingInfo['sub-title']}
          placeholder='Save the date'
          required
        />
      </div>
      <FlexDivider>
        <HalfInput mr='0 5px 0 0'>
          <StyledLegend>Bride's name</StyledLegend>
          <FullInput type='text' value={weddingInfo.bride_name} placeholder='Enter name' readOnly />
        </HalfInput>
        <HalfInput mr='0 0 0 5px'>
          <StyledLegend>Groom's name</StyledLegend>
          <FullInput type='text' value={weddingInfo.groom_name} placeholder='Enter name' readOnly />
        </HalfInput>
      </FlexDivider>
      <FlexDivider>
        <HalfInput mr='0 5px 0 0'>
          <StyledLegend>Date</StyledLegend>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              placeholder='Date'
              value={weddingInfo.date}
              onChange={(newValue) => editInfo('date', newValue)}
              renderInput={(params) => <TextField {...params} />}
              required
              disabled={true}
            />
          </LocalizationProvider>
        </HalfInput>
        <HalfInput mr='0 0 0 5px'>
          <StyledLegend>Time</StyledLegend>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              placeholder='Time'
              value={weddingInfo.time}
              onChange={(newValue) => editInfo('time', newValue)}
              renderInput={(params) => <TextField {...params} />}
              required
              disabled={true}
            />
          </LocalizationProvider>
        </HalfInput>
      </FlexDivider>
      <div>
        <StyledLegend>Address</StyledLegend>
        <FullInput type='text' value={weddingInfo.location} placeholder='Enter Address' readOnly />
      </div>
      <div>
        <StyledLegend>Location Name</StyledLegend>
        <FullInput type='text' value={weddingInfo.name} placeholder="Enter Location's name" readOnly />
      </div>
    </InputWrapper>
  );
}
