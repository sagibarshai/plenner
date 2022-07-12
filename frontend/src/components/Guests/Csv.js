import { React, useState } from 'react'
import { CSVLink } from 'react-csv';
import downloadIcon from '../../images/svg/download.svg'
import addIcon from '../../images/svg/add.svg'
import {
  CSVbuttonStyled,
  AddButtonStyled,
  DownloadIconStyle,
  PlusIconStyled
} from './styledComponent'

export default function Csv({ guestsData, setOpenModal }) {
  const [guests, setGuests] = useState(guestsData);
  const headers = [
    { label: 'full_name', key: 'full_name' },
    { label: 'side', key: 'side' },
    { label: 'group', key: 'group' },
    { label: 'phone_number', key: 'phone_number' },
    { label: 'email', key: 'email' },
    { label: 'invited', key: 'invited' },
    { label: 'extra_guests', key: 'extra_guests' },
    { label: 'attending', key: 'attending' },
  ];
  const csvReport = {
    data: guests,
    headers: headers,
    filename: 'Guest_List.csv',
  };
  return (
    <div className='csvSection'>
      <CSVLink {...csvReport}><CSVbuttonStyled><DownloadIconStyle src={downloadIcon}></DownloadIconStyle>Download CSV</CSVbuttonStyled></CSVLink>
      <AddButtonStyled onClick={() => setOpenModal(true)}><PlusIconStyled src={addIcon}></PlusIconStyled>Add Guest</AddButtonStyled>
    </div>
  );
}
