import React, { useState } from 'react';
import { styled, Typography, Box, Modal, FormControl } from '@mui/material';
import { ModalInputStyled, ModalDropDownStyled, CloseModalButton, ModalP, AddGuestButton } from './styledComponent';
import Counter from '../../common/Counter';
import xIcon from '../../images/svg/close-modal.svg';
import axios from 'axios';

const BoxStyled = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  height: 630,
  bgcolor: 'blue',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4
});

const ContainerBoxStyled = styled(Box)({
  width: 480,
  height: 474,
  backgroundColor: '#F5F7FA',
  marginLeft: 20,
  marginTop: 18
});

const ModalTitle = styled(Typography)({
  marginLeft: 30,
  marginTop: 34
});

const FormControlStyled = styled(FormControl)({
  marginLeft: 36,
  marginTop: 24,
  fontSize: 12
});

export default function AddGuest({ openModal, setOpenModal, onSubmitHandler }) {
  const API_URL = 'http://localhost:8000/';
  const [name, setName] = useState('');
  const [side, setSide] = useState('');
  const [group, setGroup] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [extraGuests, setExtraGuests] = useState(0);

  const clearForm = () => {
    setOpenModal(false);
    setName('');
    setSide('');
    setGroup('');
    setEmail('');
    setPhone('');
    setExtraGuests(0);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      guest_list: [
        {
          full_name: name,
          side: side,
          group: group,
          phone_number: phone,
          invited: false,
          extra_guests: extraGuests,
          attending: -1 // mark as not responded
        }
      ]
    };
    await axios.post(API_URL + 'guests', body, {
      headers: {
        event_id: 1,
        user_id: 1
      }
    });
    await onSubmitHandler();
    clearForm();
  };
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Modal open={openModal} onClose={handleClose}>
        <BoxStyled>
          <ModalTitle id='modal-modal-title' variant='h6' component='h2'>
            Add Guest
          </ModalTitle>
          <CloseModalButton src={xIcon} onClick={handleClose}></CloseModalButton>
          <ContainerBoxStyled>
            <FormControlStyled onSubmit={(e) => handleSubmit(e)}>
              <label>Name</label>
              <ModalInputStyled
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                placeholder='Enter Name'
              ></ModalInputStyled>{' '}
              <br />
              <label>Side</label>
              <ModalDropDownStyled
                name='side'
                value={side}
                onChange={(e) => setSide(e.target.value)}
                placeholder='Select Side'
              >
                <option>Select Side</option>
                <option>Both</option>
                <option>Bride</option>
                <option>Groom</option>
              </ModalDropDownStyled>
              <br />
              <label>Group</label>
              <ModalDropDownStyled value={group} onChange={(e) => setGroup(e.target.value)} placeholder='Select Group'>
                <option>Select Group</option>
                <option>Friends</option>
                <option>Close Friends</option>
                <option>Family</option>
                <option>Close Family</option>
                <option>Work</option>
              </ModalDropDownStyled>
              <br />
              <label>Email</label>
              <ModalInputStyled
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
              ></ModalInputStyled>
              <br />
              <label>Phone number</label>
              <ModalInputStyled
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Add Phone number'
              ></ModalInputStyled>
              <br />
              <ModalP>Number of Extra Guests</ModalP>
              <Counter intializeValue={extraGuests} onClickHandler={setExtraGuests}></Counter>
              <AddGuestButton onClick={handleSubmit} type='submit'>
                Add Guest
              </AddGuestButton>
            </FormControlStyled>
          </ContainerBoxStyled>
        </BoxStyled>
      </Modal>
    </>
  );
}
