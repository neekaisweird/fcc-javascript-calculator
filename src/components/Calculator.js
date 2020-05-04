import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { CalcProvider } from '../context/CalcState';
import styled from 'styled-components';

const Grid = styled.div`
  border: 1px red solid;
  width: 350px;
  height: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 130px repeat(5, 1fr);
  grid-template-areas:
    'display display display display'
    'clear clear divide multiply'
    'seven eight nine subtract'
    'four five six add'
    'three two one equals'
    'zero zero decimal equals';
`;

const DisplayWrapper = styled.div`
  grid-area: display;
  height: 130px;
  width: 350px;
  background-color: #94a9a9;
  font-size: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: right;
`;
const Calculator = () => {
  return (
    <CalcProvider>
      <Grid>
        <DisplayWrapper>
          <Display />
        </DisplayWrapper>
        <Keypad />
      </Grid>
    </CalcProvider>
  );
};

export default Calculator;
