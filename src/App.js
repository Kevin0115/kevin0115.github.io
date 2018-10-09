import React, { Component } from 'react';
import logo from './logo.svg';
import me from './me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Kevin Choi's Personal Website. Coming Soon.
          </p>
          <img src={me} className="Portrait" />
        </header>
      </div>
    );
  }
}

export default App;
