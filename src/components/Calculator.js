import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { CalcProvider } from '../context/CalcState';

const Calculator = () => {
  return (
    <CalcProvider>
      <Display />
      <Keypad />
    </CalcProvider>
  );
};

export default Calculator;
