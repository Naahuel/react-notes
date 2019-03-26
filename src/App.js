import React, { Component } from 'react';
import Notes from './components/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Notes</h1>
          <button>Add note</button>
        </header>
        <Notes />
      </div>
    );
  }
}

export default App;
