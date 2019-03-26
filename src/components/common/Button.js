import React from 'react';
import styled from 'styled-components';

const colors = {
  save: 'green',
  cancel: 'red'
}

const getButtonColor = props => {
  return props.type ? colors[props.type] : '#888'
}

const Button = styled.button`
  font-family: Helvetica, sans-serif;
  font-size: .8rem;
  padding: .2rem .4rem;
  cursor: pointer;
  background: none;
  border: 1px solid ${getButtonColor};
  color: ${getButtonColor};

  &:hover {
    background-color: ${getButtonColor};
    color: #FFF;
  }
`;

export default ({type, children, ...rest}) => (
  <Button type={type} {...rest}>
    {children}
  </Button>
);