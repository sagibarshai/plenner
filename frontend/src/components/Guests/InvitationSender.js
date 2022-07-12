import React from 'react'
import sendIcon from '../../images/svg/Vector.svg'
import { InvitationSentPstyled, OutOfStyled, SendButtonStyled, SendIconStyled } from './styledComponent'
export default function InvitationSender(props) {
    const { guestsData, numberOfGuestsToSend, totalGuests, showInvetationModal, setShowInvetationModal } = props;
    return (
        <div className='invitationSender'>
            <InvitationSentPstyled>{numberOfGuestsToSend} <OutOfStyled> &nbsp; out of {totalGuests} </OutOfStyled>&nbsp; Guests selected</InvitationSentPstyled>
            <SendButtonStyled onClick={() => setShowInvetationModal(true)}><SendIconStyled src={sendIcon}></SendIconStyled>Send invitation</SendButtonStyled>
        </div>
    )
}
