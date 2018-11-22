import React, { Component } from 'react';
import './css/App.css';

import Bio from './Bio';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Photography from './Photography';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEsc = this.handleEsc.bind(this);
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      window.location.href = '#bio-anchor';
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  render() {
    return (
      <div className="App">
        <Bio />
        <Experience />
        <Skills />
        <Projects />
        <Photography />
      </div>
    );
  }
}

export default App;
