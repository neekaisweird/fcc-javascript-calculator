import React from 'react';
const defaultNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Numbers = () => {
  return (
    <div>
      {defaultNums.map(num => (
        <button>{num}</button>
      ))}
    </div>
  );
};

export default Numbers;
