import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';
import Decimal from './Decimal';
import AllClear from './AllClear';
import ClearEntry from './ClearEntry';
import Equal from './Equal';

const Keypad = () => {
  return (
    <>
      <Numbers />
      <Operators />
      <Decimal />
      <AllClear />
      <ClearEntry />
      <Equal />
    </>
  );
};

export default Keypad;
