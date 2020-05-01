import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';

const Result = () => {
  const { result } = useContext(CalcContext);
  return <div id="display">{result}</div>;
};

export default Result;
