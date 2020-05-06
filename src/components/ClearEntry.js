import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

const ClearEntry = () => {
  let { backspace } = useContext(CalcContext);
  return (
    <Button id="backspace" onClick={() => backspace()}>
      CE
    </Button>
  );
};

export default ClearEntry;
