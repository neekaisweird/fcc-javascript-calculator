import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

const Equal = () => {
  const { calculateResult } = useContext(CalcContext);

  return (
    <Button
      style={{ backgroundColor: '#1f2b37', color: '#fff' }}
      whiteHover
      id="equals"
      onClick={() => calculateResult()}
    >
      =
    </Button>
  );
};

export default Equal;
