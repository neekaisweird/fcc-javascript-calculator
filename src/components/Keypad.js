import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';
import Decimal from './Decimal';
import Clear from './Clear';
import Equal from './Equal';

const Keypad = () => {
  return (
    <div>
      <Numbers />
      <Operators />
      <Decimal />
      <Clear />
      <Equal />
    </div>
  );
};

export default Keypad;
