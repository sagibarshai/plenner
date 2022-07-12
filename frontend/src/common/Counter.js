import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../src/images/svg/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../../src/images/svg/arrowDown.svg';
import {
  RangeContainer,
  ArrowButtonStyled,
} from '../components/Invitation/styledComponents';

const Counter = ({ intializeValue = 0, onClickHandler }) => {
  const [currentValue, setCurrentValue] = useState(intializeValue);
  const increase = () => {
    const newState = currentValue + 1;
    setCurrentValue(newState);
    onClickHandler(newState);
  };
  const decrease = () => {
    if (currentValue === 0) return;
    const newState = currentValue - 1;
    setCurrentValue(newState);
    onClickHandler(newState);
  };
  return (
    <RangeContainer margin={true}>
      <ArrowButtonStyled arrowDir="up" onClick={increase}>
        {' '}
        <ArrowUp />{' '}
      </ArrowButtonStyled>
      {currentValue}
      <ArrowButtonStyled onClick={decrease}>
        {' '}
        <ArrowDown />{' '}
      </ArrowButtonStyled>
    </RangeContainer>
  );
};
export default Counter;
