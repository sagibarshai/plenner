import React, { useState } from 'react';
import circleCheckIcon from '../../images/svg/circle-check.svg';
import circleCheckGreenIcon from '../../images/svg/circle-check-green.svg';
import circleXicon from '../../images/svg/circle-x.svg';
import sendMessageIcon from '../../images/svg/Group 4.svg';
import deleteIcon from '../../images/svg/delete.svg';
import sendMessageIconDisabled from '../../images/svg/Group 4 - disabled.svg';
import deleteIconDisabled from '../../images/svg/delete - disabled.svg';
import circleCheckGrayIcon from '../../images/svg/circle-check-disabled.svg';
import {
  TableStyled,
  TableSectionStyled,
  TheadStyled,
  TrStyled,
  TbodyStyled,
  ThStyled,
  CheckboxTd,
  NameTd,
  InvitationTd,
  AttendingTd,
  DeleteTd,
  StandartTd,
  CircleCheckStyle,
  DeleteIcon,
  SendMessageIcon,
  CircleXStyle,
  CircleVStyled
} from './styledComponent';
import axios from 'axios';

export default function GuestList({
  guestsData,
  guestsToSendMessage,
  setGuestsToSendMessage,
  initialData,
  setInitialData,
  setShowInvetationModal
}) {
  const [selected, setSelected] = useState([]);
  const API_URL = 'http://localhost:8000/';
  const checkBoxChange = (guest) => {
    let newSelection;
    if (selected.includes(guest.id)) {
      newSelection = selected.filter((id) => id !== guest.id);
    } else {
      newSelection = [...selected, guest.id];
    }
    setSelected(newSelection);
    setGuestsToSendMessage(newSelection);
  };
  const deleteGuest = async (guest) => {
    await axios.delete(API_URL + 'guests/' + guest.id, {
      headers: {
        event_id: 1,
        user_id: 1
      }
    });
    setInitialData(initialData.filter((item) => item.id !== guest.id));
  };
  const sendMessage = (guest, sendToSelected = true) => {
    if (sendToSelected) {
      setGuestsToSendMessage(guestsToSendMessage.filter((item) => item === guest.id));
    } else {
      setGuestsToSendMessage([guest.id]);
    }
    setSelected([]);
    setShowInvetationModal(true);
  };
  const DisplayData = guestsData.map((info, index) => {
    console.log({ info });
    return (
      <TrStyled attending={!!info.attending || !info.invited} key={index}>
        <StandartTd width='4%'>
          <input
            type='checkbox'
            id={info.full_name}
            checked={selected.includes(info.id)}
            disabled={info.attending === 0 && info.invited}
            onClick={() => checkBoxChange(info)}
          ></input>
        </StandartTd>
        <NameTd id='nameTd'>{info.full_name}</NameTd>
        <StandartTd>{info.side}</StandartTd>
        <StandartTd>{info.group}</StandartTd>
        <StandartTd width='20.325%'>{info.email}</StandartTd>
        <StandartTd>{info.phone_number}</StandartTd>
        <StandartTd>{info.invited}</StandartTd>
        <InvitationTd>
          <CircleVStyled src={info.attending > 0 ? circleCheckIcon : circleCheckGrayIcon} />
          &nbsp; &nbsp;{info.invited ? 'Sent' : 'No'}
        </InvitationTd>
        <AttendingTd attending={info.attending > 0}>
          <CircleCheckStyle attending={info.attending > 0} src={circleCheckGreenIcon} />{' '}
          <CircleXStyle attending={info.attending} src={circleXicon} /> &nbsp;{' '}
          {info.attending > 0 ? info.attending : ''}
        </AttendingTd>
        <DeleteTd>
          <DeleteIcon
            onClick={() => deleteGuest(info)}
            id={info.full_name}
            src={info.attending ? deleteIcon : deleteIconDisabled}
          />
          <SendMessageIcon
            onClick={() => sendMessage(info, false)}
            src={info.attending ? sendMessageIcon : sendMessageIconDisabled}
          />
        </DeleteTd>
      </TrStyled>
    );
  });
  return (
    <>
      <TableSectionStyled>
        <TableStyled id='myTable'>
          <TheadStyled>
            <ThStyled>
              <CheckboxTd top={true}></CheckboxTd>
              <NameTd top={true}>NAME</NameTd>
              <StandartTd top={true}>SIDE</StandartTd>
              <StandartTd top={true}>GROUP</StandartTd>
              <StandartTd top={true} width='20.325%'>
                EMAIL
              </StandartTd>
              <StandartTd top={true}>PHONE #</StandartTd>
              <StandartTd top={true}>TABLE</StandartTd>
              <InvitationTd top={true}>INVITATION</InvitationTd>
              <AttendingTd top={true}>ATTENDING</AttendingTd>
              <DeleteTd top={true}></DeleteTd>
            </ThStyled>
          </TheadStyled>
          <TbodyStyled>{DisplayData}</TbodyStyled>
        </TableStyled>
      </TableSectionStyled>
    </>
  );
}
