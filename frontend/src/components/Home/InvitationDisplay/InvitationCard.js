import React, { useEffect, useState } from 'react'
import { InvitationCardContainer, FlowerAvatarSection, InvitationWrraper, InvitiationDetails, InvitationDetailsContainer, Details, SvgIcon } from '../styledComponent'
import FlowerAvater from '../../FlowersAvatar'
import { ReactComponent as And } from '../../../images/svg/andIcon.svg';
import { convertTimeToAmPm, convertDateToName } from '../../../common/EventService';

const InvitationCard = ({ event }) => {
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    useEffect(() => {
        let time, strDate
        if (Object.keys(event).length) {
            time = convertTimeToAmPm(event.time)
            setEventTime(time)
            strDate = convertDateToName(event.date)
            setEventDate(strDate)
        }
    }, [event])
    return (
        <InvitationCardContainer>
            <FlowerAvatarSection>
                <FlowerAvater imgSrc={'https://media.nbcnewyork.com/2022/01/lady-gaga-getty-tlmd.jpg'} />
            </FlowerAvatarSection>
            <InvitationWrraper>
                <InvitationDetailsContainer>
                    <Details>
                        {event.groom_name}
                        <SvgIcon>
                            <And />
                        </SvgIcon>

                    </Details>
                    <Details>
                        {event.bride_name}
                    </Details>
                </InvitationDetailsContainer>
                <InvitationDetailsContainer>
                    <InvitiationDetails>
                        {eventDate ? eventDate : null}
                    </InvitiationDetails>
                    <InvitiationDetails>
                        {eventTime ? eventTime : null}
                    </InvitiationDetails>
                    <InvitiationDetails>
                        {event.venue_name}
                    </InvitiationDetails>
                    <p>
                        {event.location}
                    </p>
                </InvitationDetailsContainer>
            </InvitationWrraper>
        </InvitationCardContainer>
    )

}
export default InvitationCard