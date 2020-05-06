import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Display } from '../styles';
import styled from 'styled-components';

const MaxInput = styled.div`
  font-size: 1.5rem;
  color: red;
`;

const Result = () => {
  const { result, maxInput } = useContext(CalcContext);
  return (
    <Display style={{ fontSize: '2.5rem', fontWeight: '300' }} id="display">
      {maxInput ? <MaxInput>Max Input</MaxInput> : result}
    </Display>
  );
};

export default Result;
