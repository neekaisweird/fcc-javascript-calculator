import React from 'react';
const defaultOps = ['+', '-', 'x', '÷'];

const Numbers = () => {
  return (
    <div>
      {defaultOps.map(op => (
        <button>{op}</button>
      ))}
    </div>
  );
};

export default Numbers;
