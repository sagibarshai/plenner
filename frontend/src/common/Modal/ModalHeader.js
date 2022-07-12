import React from 'react';
import Exit from '../../images/svg/Plus.svg';
import MailIcon from '../../images/svg/EmailLogo.svg';
import { ModalTitle, StyledExit } from './styledComponents';

export default function ModalHeader(props) {
  const { handleCloseModal } = props;

  return (
    <>
      <StyledExit src={Exit} onClick={handleCloseModal} alt='Exit' />
      <ModalTitle>
        <img src={MailIcon} alt='Envelope' />
        <h2>Edit invitation</h2>
      </ModalTitle>
    </>
  );
}
