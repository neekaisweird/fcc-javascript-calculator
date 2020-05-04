import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Display } from '../styles';

const Result = () => {
  const { result } = useContext(CalcContext);
  return (
    <Display style={{ fontSize: '2.5rem', fontWeight: '300' }} id="display">
      {result}
    </Display>
  );
};

export default Result;
