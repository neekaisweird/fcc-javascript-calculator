import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';

const Clear = () => {
  let { clear } = useContext(CalcContext);
  return (
    <button id="clear" onClick={() => clear()}>
      AC
    </button>
  );
};

export default Clear;
