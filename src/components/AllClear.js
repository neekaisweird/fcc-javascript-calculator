import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Button } from '../styles';

const AllClear = () => {
  let { clear } = useContext(CalcContext);
  return (
    <Button id="clear" onClick={() => clear()}>
      AC
    </Button>
  );
};

export default AllClear;
