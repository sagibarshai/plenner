import React from 'react';
import {ReactComponent as ArrowUp} from '../images/svg/arrowUp.svg';
import {ReactComponent as ArrowDown} from '../images/svg/arrowDown.svg';
export const ArrowButton = ({arrowDir, className, onClick}) => {
  return (
    <button onClick={onClick} className={className}>
      {' '}
      {arrowDir === 'up' ? <ArrowUp /> : <ArrowDown />}
    </button>
  );
};
export default ArrowButton;
