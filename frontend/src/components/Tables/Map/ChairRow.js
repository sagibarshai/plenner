import React from 'react';
import { ReactComponent as ChairIcon } from '../../../images/svg/Chair.svg';
import { ChairRowContainer } from './styledComponents';
import { arrayFromSeats } from '../../../utils/Utils';

const HEAD_SEATS = 4;
const CHAIR_HEIGHT = 30;
const GAP_HEIGHT_SIZE = 8;
const X = 'x';
const Y = 'y';

const calcRowPos = (index, axis) => {
  if (axis === X) {
    return index % 2 === 0 ? 0 : index === 1 ? 1 : -1;
  }

  return index % 2 !== 0 ? 0 : index === 0 ? -1 : 1;
};

export default function ChairRow({ seatCount, index, size, isSquare }) {
  const longRowLeangth = seatCount - HEAD_SEATS;
  const shortRow = HEAD_SEATS / 2;
  const isLongRow = index % 2 === 0;

  const offsetY =
    calcRowPos(index, Y) * (size[1] / 2 + GAP_HEIGHT_SIZE + CHAIR_HEIGHT / 2);
  const offsetX =
    calcRowPos(index, X) * (size[0] / 2 + GAP_HEIGHT_SIZE + CHAIR_HEIGHT / 2);

  return (
    <ChairRowContainer
      index={index}
      size={isLongRow ? size[0] : size[1]}
      offset={[offsetX, offsetY]}
    >
      {isSquare &&
        arrayFromSeats(seatCount / 4).map((seat, index) => (
          <ChairIcon key={index} />
        ))}
      {!isSquare &&
        arrayFromSeats(isLongRow ? longRowLeangth / 2 : shortRow).map(
          (seat, index) => <ChairIcon key={index} />
        )}
    </ChairRowContainer>
  );
}
