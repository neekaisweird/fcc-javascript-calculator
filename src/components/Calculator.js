import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { CalcProvider } from '../context/CalcState';
import styled from 'styled-components';

const Borders = styled.div`
  width: 350px;
  height: 500px;
  margin: 3rem auto;
  background-color: rgba(130, 137, 137, 0.5);
`;

const Grid = styled.div`
  width: 350px;
  height: 500px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 130px repeat(5, 1fr);
  grid-gap: 1px;
  grid-template-areas:
    'display display display display'
    'clear clear backspace divide'
    'seven eight nine multiply'
    'four five six subtract'
    'three two one add'
    'zero decimal equals equals';
  border: 1px rgba(130, 137, 137, 0.5) solid;
  box-shadow: 0px 10px 14px 3px rgba(0, 0, 0, 0.26);
`;

const DisplayWrapper = styled.div`
  grid-area: display;
  height: 130px;
  background-color: #b5c7c7;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Calculator = () => {
  return (
    <CalcProvider>
      <Borders>
        <Grid>
          <DisplayWrapper>
            <Display />
          </DisplayWrapper>
          <Keypad />
        </Grid>
      </Borders>
    </CalcProvider>
  );
};

export default Calculator;
