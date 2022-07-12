import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
`;
export const MainTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #000000;
`;
export const ButtonsContainer = styled.div`
  display: flex;
`;
export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || '#9077F6'};
  color: ${({ color }) => color || 'white'};
  display: ${({ display }) => display || 'flex'};
  justify-content: space-around;
  align-items: center;
  width: 124px;
  height: 32px;
  border: none;
  padding: 10px, 20px, 10px, 20px;
  margin-right: 12px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin: ${({ center }) => (center ? `margin: 0 auto` : '')};
`;

export const ButtonText = styled.span`
  font-size: ${({ fontSize }) => fontSize || `font-size:1.3rem`};
  font-family: 'IBM Plex Sans', sans - serif;
`;
export const BodyContainer = styled.div`
  background-color: #f3f3f5;
  height: 855px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  gap: 50px;
`;
