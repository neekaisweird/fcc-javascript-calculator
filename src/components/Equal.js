import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import styled from 'styled-components';

const EqualsButton = styled.button`
  grid-area: equals;
  color: #fff;
  background-color: #1f2b37;
  font-size: 2rem;
`;

const Equal = () => {
  const { calculateResult } = useContext(CalcContext);

  return (
    <EqualsButton id="equals" onClick={() => calculateResult()}>
      =
    </EqualsButton>
  );
};

export default Equal;
