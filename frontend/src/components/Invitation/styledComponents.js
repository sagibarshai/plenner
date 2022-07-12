import styled from 'styled-components';
import ArrowButton from '../ArrowButton';

export const MainContainer = styled.div`
  background-color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  overflow-y: hidden;
  position: relative;
  img:first-child {
    position: unset;
  }
  & > div:first-child {
    margin-top: 20px;
  }
`;

export const CenterdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
export const MainTitle = styled.h2`
  color: #f85902;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 0;
`;
export const MainSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 0;
`;
export const WeddingNames = styled.h1`
  font-weight: 400;
  font-size: 4rem;
  line-height: 46px;
  color: #000000;
  margin-bottom: 12px;
`;
export const SvgIcon = styled.i`
  vertical-align: middle;
  margin: 0 4px;
`;
export const StyledDate = styled.p`
  font-size: 1.6rem;
  line-height: 20px;
  display: inline-block;
  justify-self: center;
  margin: 0 auto 4px auto;
`;
export const StyledTime = styled.p`
  font-size: 1.6rem;
  line-height: 20px;
  margin-top: 0;
`;
export const HallName = styled.p`
  margin: 12px auto 0 auto;

  font-size: 1.6rem;
  line-height: 20px;
`;
export const Location = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  margin-top: 4px;
`;
export const RsvpConatiner = styled.div`
  width: 411px;
  height: 344px;
  background-color: #f4f1fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const EnvelopeIconStyled = styled.i`
  margin: 11.33px auto 8px auto;
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 22.5px;
  margin: 0 auto 20px auto;
`;
export const ButtonsContainer = styled.div`
  width: auto;
  margin: 0 auto 23px auto;
`;
export const Button = styled.button`
  width: 78px;
  height: 36px;
  ${(props) => (props.color ? `color:${props.color}` : '')};
  background-color: white;
  border-radius: 80px;
  border: 1px solid #e0e0e0;
  margin-right: 8px;
  cursor: pointer;
  ${(props) => props.selected && `border: 2px solid ${props.color}`};
  transition: border 0.3s ease;
`;
export const ButtonText = styled.span`
  margin-left: 8px;
`;
export const SubTitle = styled.h2`
  margin: 0 auto;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const RangeContainer = styled.div`
  width: 148px;
  height: 36px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 80px;
  font-size: 1.4rem;
  margin-top: ${(props) => (props.margin ? '10px' : 0)};
`;
export const ArrowButtonStyled = styled(ArrowButton)`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
export const SubmitButton = styled.button`
  width: 148px;
  height: 36px;
  font-size: 1.4rem;
  line-height: 18px;
  color: white;
  background-color: #5f41d9;
  align-items: center;
  padding: 8px 16px;
  border-radius: 80px;
  border: none;
  margin: 20px auto 31.33px auto;
  cursor: pointer;
`;
export const ThankesMessage = styled.h2`
  font-size: 3.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
export const ModalTitle = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  h2 {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
  }
  img {
    margin: 0 5px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  height: 719px;
`;

export const FlexDivider = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  padding: 0 36px;
  font-family: Quicksand;
  font-size: 12px;
  font-weight: 400;
`;
export const FullInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 10px;
  border-radius: 3px;
  border: 1px #ebeef5 groove;
  overflow: hidden;
  min-width: 0%;
  border-color: rgba(0, 0, 0, 0.23);
`;
export const HalfInput = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: ${(props) => props.mr};

  div {
    height: 35px;
    background-color: white;
  }
  input {
    padding-right: 0;
    padding: 6px 6px 6px 10px;
    font-family: Quicksand;
    font-size: 15px;
    font-weight: 400;
  }
`;
export const StyledLegend = styled.legend`
  height: 35px;
  transform: translateY(13px);
  font-size: 14px;
`;
export const ImageWrapper = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  color: #ffffff;
  background-color: #9077f6;
  border-radius: 40px;
  width: 72px;
  height: 42px;
  border: 0;
  font-size: 13px;
  margin: 14px 10px;
  align-self: end;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledChangePhoto = styled.button`
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  border-radius: 40px;
  width: 72px;
  height: 42px;
  border: 0;
  font-size: 9.88px;
  line-height: 12px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const HiddenInput = styled.div`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0 36px;
  position: absolute;
  top: 250px;
  width: 408px;
  align-items: center;
  input:focus {
    outline-color: #9077f6;
  }
`;

export const MiniConfirm = styled.button`
  color: #ffffff;
  background-color: #9077f6;
  border-radius: 40px;
  width: 72px;
  height: 30px;
  border: 0;
  font-size: 13px;
  margin: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledExit = styled.img`
  position: absolute;
  top: 33px;
  right: 50px;
  &:hover {
    cursor: pointer;
  }
`;
