import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Helvetica, sans-serif;
  color: #888;
`;

export default ({as, children}) => (
  <Title as={as}>
    {children}
  </Title>
);