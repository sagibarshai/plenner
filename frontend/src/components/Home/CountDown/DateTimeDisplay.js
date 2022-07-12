import React from 'react';
import { CounterCard, CardNum, DayAndTimeContainer, DaysTitle } from "../styledComponent";

const DateTimeDisplay = ({ value, type }) => {
    return (
        <DayAndTimeContainer>
            <CounterCard>
                <CardNum>{value}</CardNum>
            </CounterCard>
            <DaysTitle>{type}</DaysTitle>
        </DayAndTimeContainer>
    );
};

export default DateTimeDisplay;