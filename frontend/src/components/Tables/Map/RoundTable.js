import React from 'react';
import { ChairContainer, CircleTableContainer } from './styledComponents';
import { ReactComponent as ChairIcon } from '../../../images/svg/Chair.svg';
import { arrayFromSeats } from '../../../utils/Utils';
import TableInfo from './TableInfo';

const TABLE_RADIUS = 120;
const CHAIR_SIZE = 38;
const SEAT_MARGIN = 4;
const GAP_SIZE = TABLE_RADIUS / 2 + CHAIR_SIZE / 2 + SEAT_MARGIN;
const MAX_SEATS = 12;
const MIN_SEATS = 6;

const limitSits = (count) => {
  if (count < MIN_SEATS) {
    return MIN_SEATS;
  }
  if (count > MAX_SEATS) {
    return MAX_SEATS;
  }
  return count;
};
export default function RoundTable({ seatCount, id, seatStatus }) {
  const limitedSeatCount = limitSits(seatCount);

  return (
    <CircleTableContainer size={TABLE_RADIUS}>
      <TableInfo name={`Table ${id}`} seatStatus={seatStatus} />
      {arrayFromSeats(limitedSeatCount).map((_, i) => (
        <ChairContainer
          key={i}
          index={i}
          seatCount={limitedSeatCount}
          gap={GAP_SIZE}
          isRound={true}
        >
          <ChairIcon />
        </ChairContainer>
      ))}
    </CircleTableContainer>
  );
}
