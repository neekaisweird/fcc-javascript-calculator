import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import styled from 'styled-components';

const Number = styled.button`
  grid-area: ${prop => prop.id};
  background-color: #f0f1f3;
  color: #1f2b37;
  font-size: 2rem;
`;

const defaultNums = [
  { id: 'zero', num: 0 },
  { id: 'one', num: 1 },
  { id: 'two', num: 2 },
  { id: 'three', num: 3 },
  { id: 'four', num: 4 },
  { id: 'five', num: 5 },
  { id: 'six', num: 6 },
  { id: 'seven', num: 7 },
  { id: 'eight', num: 8 },
  { id: 'nine', num: 9 }
];
const Numbers = () => {
  const { handleNumber } = useContext(CalcContext);

  return (
    <>
      {defaultNums.map(val => (
        <Number
          className="num"
          id={val.id}
          key={val.id}
          onClick={() => handleNumber(val.num.toString())}
        >
          {val.num}
        </Number>
      ))}
    </>
  );
};

export default Numbers;
