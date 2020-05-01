import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';

const Decimal = () => {
  let { handleDecimal } = useContext(CalcContext);
  return (
    <button id="decimal" onClick={() => handleDecimal()}>
      .
    </button>
  );
};

export default Decimal;
