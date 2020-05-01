import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';

const Equation = () => {
  const { equation } = useContext(CalcContext);
  return (
    <div>
      {equation.map(e => {
        return e;
      })}
    </div>
  );
};

export default Equation;
