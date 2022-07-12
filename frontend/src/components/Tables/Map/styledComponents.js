import styled from 'styled-components';

// MAP //
export const MapContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 50px 240px 45px 240px;
  gap: 125px;
`;

// TABLES //
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleTableContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid #61656c;
  border-radius: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin}px;
`;

export const SquareTableContainer = styled.div`
  width: ${(props) => props.size[0]}px;
  height: ${(props) => props.size[1]}px;
  border: 1px solid #61656c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin}px;
`;

export const TableInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableName = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

// CHAIR POSITION FUNCTIONS //
// positions are culculated with:
// pos = (id/seatCount) * 2pi
// x = cos(pos) * gap
// y = sin(pos) * gap
// rotation = arctan(x,y) + 90deg

function getChairPosX(index, seatCount, gap) {
  return Math.cos((index / seatCount) * 2 * Math.PI) * gap;
}

function getChairPosY(index, seatCount, gap) {
  return Math.sin((index / seatCount) * 2 * Math.PI) * gap;
}

function getRotation(index, seatCount) {
  return (
    Math.atan2(
      Math.sin((index / seatCount) * 2 * Math.PI),
      Math.cos((index / seatCount) * 2 * Math.PI)
    ) +
    Math.PI / 2
  );
}

// CHAIRS //
export const ChairContainer = styled.div`
  position: absolute;
  transform: translate(
      ${({ index, seatCount, gap }) => getChairPosX(index, seatCount, gap)}px,
      ${({ index, seatCount, gap }) => getChairPosY(index, seatCount, gap)}px
    )
    rotate(${({ index, seatCount }) => getRotation(index, seatCount)}rad); ;
`;

export const ChairRowContainer = styled.div`
  display: flex;
  width: ${({ size }) => size}px;
  justify-content: space-evenly;
  position: absolute;
  transform: translateX(${({ offset }) => offset[0]}px)
    translateY(${({ offset }) => offset[1]}px)
    rotate(${({ index }) => index * 90}deg);
`;

export const GuestListContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 34px 0px #3b599833;
  padding: 20px;
`;
