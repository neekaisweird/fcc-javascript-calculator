import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

const defaultOps = [
  { id: 'add', op: '+' },
  { id: 'subtract', op: '-' },
  { id: 'multiply', op: 'x' },
  { id: 'divide', op: '/' }
];

const Operators = () => {
  const { handleOperator } = useContext(CalcContext);
  return (
    <>
      {defaultOps.map(val => (
        <Button
          style={{ backgroundColor: '#1d7b72', color: '#fff' }}
          whiteHover
          className="op"
          id={val.id}
          key={val.id}
          onClick={() => handleOperator(val.op)}
        >
          {val.op}
        </Button>
      ))}
    </>
  );
};

export default Operators;
