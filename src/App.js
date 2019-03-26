import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './components/common/Title';
import Notes from './components/Notes';
import AddNote from './components/AddNote';


const Wrapper = styled.div`
  max-width: 600px;
  padding: 10px;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title as="h2">My Notes</Title>
          <AddNote />
        </Header>
        <Notes />
      </Wrapper>
    );
  }
}

export default App;
