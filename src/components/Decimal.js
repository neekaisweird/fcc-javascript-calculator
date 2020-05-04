import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import styled from 'styled-components';

const DecimalButton = styled.button`
  grid-area: decimal;
  background-color: #f0f1f3;
  color: #1f2b37;
  font-size: 2rem;
`;
const Decimal = () => {
  let { handleDecimal } = useContext(CalcContext);
  return (
    <DecimalButton id="decimal" onClick={() => handleDecimal()}>
      .
    </DecimalButton>
  );
};

export default Decimal;
