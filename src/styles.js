import styled from 'styled-components';

export const Button = styled.button`
  grid-area: ${prop => prop.id};
  background-color: #f0f1f3;
  color: #1f2b37;
  font-family: inherit;
  font-weight: inherit;
  font-size: 2rem;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border: ${prop =>
      prop.whiteHover
        ? '1px solid rgba(255,255,255, 1)'
        : '1px solid rgba(31,43,54, .7)'};
  }
`;

export const Display = styled.div`
  height: 65px;
  line-height: 65px;
  color: #1f2b36;
  padding-right: 1rem;
`;
