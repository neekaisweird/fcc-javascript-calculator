import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
// '+', '-', 'x', '÷'
const Equal = () => {
  const { calculateResult } = useContext(CalcContext);

  return (
    <button id="equals" onClick={() => calculateResult()}>
      =
    </button>
  );
};

export default Equal;
