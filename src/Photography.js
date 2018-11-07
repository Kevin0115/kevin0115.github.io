import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Photography.css';

import Background from './images/photobackground.jpeg'

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

export default class Photography extends Component {
  render() {
    return (
      <ScrollableAnchor id={'photo-anchor'}>
      	<div className="photography" style={backgroundStyle}>
          <div className="photography-title">
            Photography Portfolio
          </div>
          <div className="photography-content">
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}