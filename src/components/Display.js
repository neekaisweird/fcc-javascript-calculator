import React from 'react';
import Equation from './Equation';
import Result from './Result';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
  grid-area: display;
  height: 130px;
  background-color: #b5c7c7;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Display = () => {
  return (
    <DisplayWrapper>
      <Equation />
      <Result />
    </DisplayWrapper>
  );
};

export default Display;
