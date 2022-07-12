import styled from 'styled-components';

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  gap: 4px;
  position: ${({ position }) => position || 'relative'};
  background: #ffffff;
  box-shadow: 0px 0px 34px rgba(59, 89, 152, 0.2);
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  justify-content: ${(props) =>
    props.closeButton ? 'space-between' : 'center'};
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  max-width: 650px;
  min-width: 100px;
  padding: 29px 12px;
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

export const StyledExit = styled.img`
  position: absolute;
  top: 33px;
  right: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalTitle = styled.h2`
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
