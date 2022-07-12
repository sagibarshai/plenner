import React from 'react';
import RoundTable from './RoundTable';
import SquareTable from './SquareTable';
import { TableContainer } from './styledComponents';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import GuestList from './GuestList';
const MAX_SQUARE_SEATS = 20;
const CIRCLE = 'circle';

const normalizeToSquare = (seatCount) => {
  if (seatCount > MAX_SQUARE_SEATS) {
    return MAX_SQUARE_SEATS;
  }
  return Math.ceil(seatCount / 2) * 2;
};

const TooltipContainer = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default function Table({ seatCount, shape, guestList, id, seatStatus }) {
  const guestListIsEmpty = guestList.length == 0;
  return (
    <TooltipContainer
      guestListIsEmpty={guestListIsEmpty}
      title={
        guestListIsEmpty ? '' : <GuestList guestList={guestList} id={id} />
      }
      leaveDelay={200}
    >
      <TableContainer>
        {shape == CIRCLE ? (
          <RoundTable seatCount={seatCount} id={id} seatStatus={seatStatus} />
        ) : (
          <SquareTable
            seatCount={normalizeToSquare(seatCount)}
            id={id}
            seatStatus={seatStatus}
          />
        )}
      </TableContainer>
    </TooltipContainer>
  );
}
