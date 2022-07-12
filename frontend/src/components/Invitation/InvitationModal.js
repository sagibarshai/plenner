import React, { useState, useCallback, useEffect } from 'react';
import Button from '@mui/material/Button';
import { getInviteInfo, sendInvite } from '../../Lib/invitation.service.js';
import { ModalContainer, ModalContent, StyledButton } from './styledComponents';
import Dialog from '@mui/material/Dialog';
import CustomizedSnackbars from './CustomizedSnackbars';
import ModalHeader from './ModalHeader';
import ModalForm from './ModalForm';
import ModalPicture from './ModalPicture';

export default function InvitationModal(props) {
  const { eventId, guestArray, showInvetationModal, setShowInvetationModal, onSubmitHandler } = props;
  const [weddingInfo, setWeddingInfo] = useState({
    title: '',
    'sub-title': '',
    date: {},
    time: {},
    groom_name: '',
    bride_name: '',
    location: '', //venue
    name: '', //venue
    image_url: ''
  });
  const [openAlert, setOpenAlert] = useState(false);
  const [goodAlert, setGoodAlert] = useState(true);

  const fetchData = useCallback(async () => {
    const data = await getInviteInfo(eventId);
    setWeddingInfo({
      title: data.title,
      'sub-title': data['sub-title'],
      date: data.date,
      time: data.time,
      groom_name: data.groom_name,
      bride_name: data.bride_name,
      location: data.location,
      name: data.name,
      image_url: data.image_url
    });
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [eventId, fetchData]);

  const editInfo = (key, value) => {
    const newInfo = { ...weddingInfo, [key]: value };
    setWeddingInfo(newInfo);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setShowInvetationModal(false);
      const invite = { guests: guestArray, ...weddingInfo };
      const response = await sendInvite(eventId, invite);
      if (response) {
        await onSubmitHandler();
        setGoodAlert(true);
        setOpenAlert(true);
      }
    } catch (err) {
      setGoodAlert(false);
      setOpenAlert(true);
      console.error(err);
    }
  };
  console.log(guestArray);
  return (
    <>
      <div>
        <Dialog open={showInvetationModal} PaperProps={{ sx: { width: '520px', height: '875px' } }}>
          <ModalContainer onSubmit={(e) => handleOnSubmit(e)}>
            <ModalHeader handleCloseModal={() => setShowInvetationModal(false)} />
            <ModalContent>
              <ModalPicture weddingInfo={weddingInfo} setWeddingInfo={setWeddingInfo} editInfo={editInfo} />
              <ModalForm weddingInfo={weddingInfo} setWeddingInfo={setWeddingInfo} editInfo={editInfo} />
            </ModalContent>
            <StyledButton type='submit'>Send</StyledButton>
          </ModalContainer>
        </Dialog>
      </div>
      <CustomizedSnackbars openAlert={openAlert} setOpenAlert={setOpenAlert} goodAlert={goodAlert} />
    </>
  );
}
