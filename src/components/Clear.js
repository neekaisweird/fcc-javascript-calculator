import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import styled from 'styled-components';

const ClearButton = styled.button`
  grid-area: clear;
  background-color: #f0f1f3;
  color: #1f2b37;
  font-size: 2rem;
`;

const Clear = () => {
  let { clear } = useContext(CalcContext);
  return (
    <ClearButton id="clear" onClick={() => clear()}>
      AC
    </ClearButton>
  );
};

export default Clear;
