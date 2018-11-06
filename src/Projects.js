import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Projects.css';

import Background from './images/projectbackground.jpeg'

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

export default class Projects extends Component {
  render() {
    return (
    	<ScrollableAnchor id={'projects-anchor'}>
      	<div className="projects" style={backgroundStyle} />
    	</ScrollableAnchor>
    );
  }
}