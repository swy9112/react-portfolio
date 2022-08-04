import React from 'react';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => (props.direction === 'row' ? 'center' : 'baseline')};
  justify-content: ${(props) => (props.direction === 'column' ? 'center' : 'baseline')};
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid #323232;
`;

function Section({ children, direction = 'row' }) {
  return <Wrap direction={direction}>{children}</Wrap>;
}

export default Section;
