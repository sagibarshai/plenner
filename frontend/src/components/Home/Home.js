import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomeContainer, CountDownContainer, DashboardContainer } from './styledComponent';
import Checklist from '../Checklist/Checklist';
import CountDown from './CountDown/CountDown';
import InvitationCard from './InvitationDisplay/InvitationCard';
import { getInvitation } from '../../common/EventService';
import SeatsSummary from '../SeatsSummary/SeatsSummary';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  console.log('home');
  const [event, setEvent] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvitation();
      setEvent(data);
    };
    fetchData().then().catch(console.error);
  }, []);
  return (
    <HomeContainer>
      <DashboardContainer>
        <CountDownContainer>
          <CountDown event={event} />
          <InvitationCard event={event} />
        </CountDownContainer>
        <StyledContainer>
          <Checklist />
          <SeatsSummary />
        </StyledContainer>
      </DashboardContainer>
    </HomeContainer>
  );
};
export default Home;
