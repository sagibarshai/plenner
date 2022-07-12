import React, { useEffect, useState } from 'react'
import { CounterContainer, FlowersSpan } from "../styledComponent";
import { ReactComponent as CountDownFlowers } from '../../../images/svg/countDownFlowers.svg';
import CountdownTimer from './CountDownTimer';


const CountDown = ({ event }) => {
    const [targetDate, setTargetDate] = useState("")
    useEffect(() => {
        if (Object.keys(event).length) {
            setTargetDate(event.date)
        }
    }, [event])
    return (
        <CounterContainer>
            <FlowersSpan>
                <CountDownFlowers />
            </FlowersSpan>
            {targetDate ? <CountdownTimer targetDate={targetDate} /> : null}
        </CounterContainer>)
}

export default CountDown

