import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Experience.css';

import Background from './images/expbackground.jpeg'

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

export default class Experience extends Component {
  render() {
    return (
      <ScrollableAnchor id={'exp-anchor'}>
        <div className="experience" style={backgroundStyle} />
      </ScrollableAnchor>
    );
  }
}