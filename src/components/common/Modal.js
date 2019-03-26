import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const Modal = styled.div`
  padding: 1em;
  margin: 1rem auto;
  max-width: 80%;
  background-color: white;
`;

export default ({children, ...rest}) => (
  <ModalWrapper {...rest}>
    <Modal>
      {children}
    </Modal>
  </ModalWrapper>
);