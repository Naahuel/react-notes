import React from 'react';
import styled from 'styled-components';

const Empty = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #888;
  padding: 1em;
  border: 1px solid rgba(0,0,0,0.2);
  text-align: center;
`;

export default ({children}) => (
  <Empty>
    {children}
  </Empty>
);