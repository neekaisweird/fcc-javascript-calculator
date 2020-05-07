import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcState';
import { Display } from '../styles';
import styled from 'styled-components';

const MaxInput = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 18px;
`;

const Result = () => {
  const { result, maxInput, equation } = useContext(CalcContext);
  return (
    <Display style={{ fontSize: '2.5rem', fontWeight: '300' }} id="display">
      {maxInput ? (
        <MaxInput>Max Input</MaxInput>
      ) : result || result === 0 ? (
        result
      ) : (
        equation[equation.length - 1]
      )}
    </Display>
  );
};

export default Result;
