import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Display } from '../styles';

const Equation = () => {
  const { equation } = useContext(CalcContext);
  return (
    <Display style={{ fontSize: '2rem' }}>
      {equation.map(e => {
        return e;
      })}
    </Display>
  );
};

export default Equation;
