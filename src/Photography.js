import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
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
            <ImageGallery 
              items={images}
              autoPlay={true}
              showThumbnails={false}
              slideInterval={4000}
              slideDuration={900}
              showPlayButton={false}
            />
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