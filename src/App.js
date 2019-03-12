import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEsc = this.handleEsc.bind(this);
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      window.location.href = '#home';
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  render() {
    return (
      <div className="app-container">
        <ScrollableAnchor id={'home'}><NavBar /></ScrollableAnchor>
        <Banner />
        <Bio />
        <ScrollableAnchor id={'skills'}><Skills /></ScrollableAnchor>
        <ScrollableAnchor id={'experience'}><Experience /></ScrollableAnchor>
        <ScrollableAnchor id={'projects'}><Projects /></ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;