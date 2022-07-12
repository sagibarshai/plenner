import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  Button,
  ButtonText,
  RsvpConatiner,
  ButtonsContainer,
  SubTitle,
  EnvelopeIconStyled,
  Title,
  MainContainer,
  MainTitle,
  MainSubtitle,
  CenterdContainer,
  WeddingNames,
  StyledDate,
  StyledTime,
  HallName,
  Location,
  SvgIcon,
  SubmitButton,
  ThankesMessage
} from './styledComponents';
import { ReactComponent as ViIcon } from '../../images/svg/viIcon.svg';
import { ReactComponent as EnvelopeIcon } from '../../images/svg/envelopeIcon.svg';
import { ReactComponent as AndIcon } from '../../images/svg/andIcon.svg';
import { ReactComponent as SendIcon } from '../../images/svg/sendIcon.svg';
import Counter from '../../common/Counter';
import { getEventData, sendData } from '../../services/EventsApi';
import { removeSeconds } from '../../utils/removeSeconds';
import { removeDayFromDate } from '../../utils/removeDayFromDate';
import { formSubmitHandler } from './submitFormInvitation';
import FlowersAvatar from '../FlowersAvatar';
const Invitation = () => {
  const [approveInvitation, setApproveInvitation] = useState(true);
  const [guests, setGuests] = useState(1);
  const [formIsSubmited, setFormIsSubmited] = useState(false);
  const [weddingData, setWeddingData] = useState({
    subTitle: '',
    time: '',
    date: '',
    location: '',
    imageUrl: '',
    brideName: '',
    groomName: '',
    hallName: ''
  });
  const [searchParams] = useSearchParams();
  const guestId = searchParams.get('guest_id');
  console.log({ guestId });
  const { invitationId } = useParams();
  const approveInvitationHanlder = () => {
    setApproveInvitation(true);
  };
  const disapproveInvitationHandler = () => {
    setApproveInvitation(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEventData(guestId, invitationId);
        const dateWithoutDay = removeDayFromDate(response.date);
        const WeddingTime = removeSeconds(response.time);
        setWeddingData({
          time: WeddingTime,
          date: dateWithoutDay,
          location: response.location,
          imageUrl: response.image_url,
          brideName: response.bride_name,
          groomName: response.groom_name,
          hallName: response.hall_name,
          subTitle: response['sub-title']
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {!formIsSubmited ? (
        <MainContainer>
          <FlowersAvatar imgSrc={weddingData.imageUrl} />
          <CenterdContainer>
            <MainTitle>Save the date</MainTitle>
            <MainSubtitle>{weddingData.subTitle}</MainSubtitle>
            <WeddingNames>
              {weddingData.brideName}
              <SvgIcon>
                <AndIcon />
              </SvgIcon>
              {weddingData.groomName}
            </WeddingNames>
            <StyledDate>{weddingData.date}</StyledDate>
            <StyledTime>{weddingData.time}</StyledTime>
            <HallName>{weddingData.hallName}</HallName>
            <Location>{weddingData.location}</Location>
          </CenterdContainer>
          <RsvpConatiner>
            <EnvelopeIconStyled>
              <EnvelopeIcon />
            </EnvelopeIconStyled>
            <Title>RSVP</Title>
            <SubTitle>Will you be there</SubTitle>
            <ButtonsContainer>
              <Button selected={approveInvitation} onClick={approveInvitationHanlder} color={'#219653'}>
                <ViIcon />
                <ButtonText>Yes</ButtonText>
              </Button>
              <Button selected={!approveInvitation} onClick={disapproveInvitationHandler} color={'#fc264d'}>
                &#10006;
                <ButtonText>No</ButtonText>
              </Button>
            </ButtonsContainer>
            <SubTitle>How many guests?</SubTitle>
            <Counter intializeValue={guests} onClickHandler={setGuests} />
            <SubmitButton
              onClick={(event) => {
                return formSubmitHandler(
                  event,
                  sendData,
                  setFormIsSubmited,
                  approveInvitation,
                  guests,
                  invitationId,
                  guestId
                );
              }}
            >
              <SvgIcon>
                <SendIcon />
              </SvgIcon>
              Send
            </SubmitButton>
          </RsvpConatiner>
        </MainContainer>
      ) : (
        <ThankesMessage>Thanks</ThankesMessage>
      )}
    </>
  );
};
export default Invitation;
