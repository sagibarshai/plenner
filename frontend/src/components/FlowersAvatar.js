import React from 'react';
import styled from 'styled-components';
import FlowersFrame from '../images/svg/flowersFrame.svg';
// import { ReactComponent as FlowersFrame } from '../images/svg/flowersFrame.svg';

const FlowersWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const StyledFlowers = styled.img`
  position: absolute;
  transform: translate(-5px, 0);
`;
const StyledPic = styled.img`
  position: absolute;
  width: 230px;
  height: 230px;
  clip-path: polygon(50% 0%, 87% 15%, 102% 50%, 87% 85%, 50% 100%, 14% 85%, -1% 50%, 14% 15%);
`;


export default function FlowersAvatar(props) {
  const imgSrc = props.imgSrc;

  return (
    <FlowersWrapper>
      <StyledPic src={imgSrc} />
      <StyledFlowers src={FlowersFrame} alt='FlowersFrame' />
    </FlowersWrapper>
  );
}

