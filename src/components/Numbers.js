import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

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
        <Button
          className="num"
          id={val.id}
          key={val.id}
          onClick={() => handleNumber(val.num.toString())}
        >
          {val.num}
        </Button>
      ))}
    </>
  );
};

export default Numbers;
