import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Skills.css';

import Background from './images/hobbiesbackground.jpeg'

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

export default class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id={'skills-anchor'}>
      	<div className="skills" style={backgroundStyle}>
          <div className="skills-title">
            Technical Skills
          </div>
          <div className="skills-content">
          </div>
        </div>
   	  </ScrollableAnchor>
    );
  }
}