import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';
import Decimal from './Decimal';
import Clear from './Clear';
import Equal from './Equal';

const Keypad = () => {
  return (
    <>
      <Numbers />
      <Operators />
      <Decimal />
      <Clear />
      <Equal />
    </>
  );
};

export default Keypad;
