import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Photography.css';

import Background from './images/photobackground.jpeg';

import { PhotoList } from './components/PhotoList';

const images = PhotoList;

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 800,
}

export default class Photography extends Component {
  render() {
    return (
      <ScrollableAnchor id={'photo-anchor'}>
      	<div className="photography" style={backgroundStyle}>
          <div className="photography-title">
            Photography Portfolio
          </div>
          <div className="photography-content">
            <Fade {...fadeProperties}>
              {this.renderPhotoContent()}
            </Fade>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }

  renderPhotoContent() {
    return images.map((url, index) => {
      return (
        <div className="each-fade">
          <div className="image-container">
            <img src={url} />
          </div>
        </div>
      )
    });
  }
}