import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ButtonsContainer,
  ModalTitle,
} from './styledComponents';
import { ReactComponent as Exit } from '../../images/svg/xIcon.svg';

export default function Modal({
  children,
  title,
  closeButton,
  handleClose,
  actions,
}) {
  return (
    <ModalContainer>
      <ModalHeader closeButton={closeButton || false}>
        <ModalTitle>{title}</ModalTitle>
        {closeButton && <Exit onClick={handleClose} />}
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ButtonsContainer>{actions}</ButtonsContainer>
    </ModalContainer>
  );
}
