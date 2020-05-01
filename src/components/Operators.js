import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';

const defaultOps = [
  { id: 'add', op: '+' },
  { id: 'subtract', op: '-' },
  { id: 'multiply', op: '*' },
  { id: 'divide', op: '/' }
];

const Operators = () => {
  const { handleOperator } = useContext(CalcContext);
  return (
    <div>
      {defaultOps.map(val => (
        <button id={val.id} key={val.id} onClick={() => handleOperator(val.op)}>
          {val.op}
        </button>
      ))}
    </div>
  );
};

export default Operators;
