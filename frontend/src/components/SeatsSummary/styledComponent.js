import styled from 'styled-components';

export const SeatsSummaryStyled = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  width: 335px;
  height: 354px;
  margin: 20px;
  background-color: white;
  border: 1px solid #d8deea;
  border-radius: 4px;
  & h2 {
    width: 62px;
    height: 28px;
    line-height: 28.13px;
    font-weight: 300;
    margin: 20px;
  }
  & h5 {
    margin: 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const CircularProgressbarWrapper = styled.div`
  width: 335px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42.5px;
  margin-bottom: 42.5px;

  .CircularProgressbar {
    width: 180px !important;
    height: 180px !important;
  }

  & div:last-of-type() svg {
    width: 30px !important;
    height: 31px !important;
    margin-top: 54.32px !important;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin: 0;
  }

  & p:last-child {
    margin: 20px;
  }
`;

export const AStyled = styled.a`
  text-decoration: none;
  color: #5f41d9;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin: 20px;
`;
