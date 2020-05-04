import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

const Decimal = () => {
  let { handleDecimal } = useContext(CalcContext);
  return (
    <Button id="decimal" onClick={() => handleDecimal()}>
      .
    </Button>
  );
};

export default Decimal;
