import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import styled from 'styled-components';

const Operator = styled.button`
  grid-area: ${prop => prop.id};
  background-color: #1d7b72;
  color: #fff;
  font-size: 2rem;
`;

const defaultOps = [
  { id: 'add', op: '+' },
  { id: 'subtract', op: '-' },
  { id: 'multiply', op: '*' },
  { id: 'divide', op: '/' }
];

const Operators = () => {
  const { handleOperator } = useContext(CalcContext);
  return (
    <>
      {defaultOps.map(val => (
        <Operator
          className="op"
          id={val.id}
          key={val.id}
          onClick={() => handleOperator(val.op)}
        >
          {val.op}
        </Operator>
      ))}
    </>
  );
};

export default Operators;
