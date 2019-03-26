import React, { Component } from 'react';
import Notes from './components/Notes';
import AddNote from './components/AddNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Notes</h1>
          <AddNote />
        </header>
        <Notes />
      </div>
    );
  }
}

export default App;
