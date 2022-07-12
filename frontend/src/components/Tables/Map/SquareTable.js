import React from 'react';
import { SquareTableContainer } from './styledComponents';
import ChairRow from './ChairRow';
import { arrayFromSeats } from '../../../utils/Utils';
import TableInfo from './TableInfo';

const CHAIR_SIZE = 38;
const CHAIR_GAP_SIZE = 11;
const NUMBER_OF_HEAD_CHAIRS = 4;
const MAX_SQUARE_SIZE = 16;
const MAX_SEATS = 16;
const MIN_SEATS = 8;

const getTableSize = (seatCount, sizeX, sizeY) => {
  if (sizeX && sizeY) {
    return [sizeX, sizeY];
  }

  const isSquareTable = seatCount % 4 === 0 && seatCount <= MAX_SQUARE_SIZE;

  if (isSquareTable) {
    const edge = ((CHAIR_GAP_SIZE + CHAIR_SIZE) * seatCount) / 4;
    return [edge, edge];
  }

  const x =
    ((seatCount - NUMBER_OF_HEAD_CHAIRS) * (CHAIR_SIZE + CHAIR_GAP_SIZE)) / 2;
  const y = (NUMBER_OF_HEAD_CHAIRS / 2) * (CHAIR_SIZE + CHAIR_GAP_SIZE);
  return [x, y];
};

const limitSeats = (count) => {
  if (count > MAX_SEATS) {
    return MAX_SEATS;
  }
  if (count < MIN_SEATS) {
    return MIN_SEATS;
  }
  return count;
};

export default function SquareTable({
  sizeX,
  sizeY,
  seatCount,
  id,
  seatStatus,
}) {
  const limitedSeatCount = limitSeats(seatCount);
  const isSquareTable =
    limitedSeatCount % 4 === 0 && limitedSeatCount <= MAX_SQUARE_SIZE;

  return (
    <SquareTableContainer size={getTableSize(limitedSeatCount, sizeX, sizeY)}>
      <TableInfo name={`Table ${id}`} seatStatus={seatStatus} />
      {arrayFromSeats(4).map((seat, index) => (
        <ChairRow
          index={index}
          seatCount={limitedSeatCount}
          size={getTableSize(limitedSeatCount, sizeX, sizeY)}
          isSquare={isSquareTable}
        ></ChairRow>
      ))}
    </SquareTableContainer>
  );
}
