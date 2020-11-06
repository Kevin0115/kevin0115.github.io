import React, { Component } from 'react';
import '../css/Bio.css';

import { LINK_VISIT } from '../Const';
import { postSession } from '../Utils';

const youtubeLink = "https://www.youtube.com/watch?v=IybIOMcP_TA&feature=youtu.be"

class Bio extends Component {
  handleLinkClick(itemName) {
    postSession(LINK_VISIT + '=' + itemName);
  }

  render() {
    return (
      <div className="bio">
        <h1>About Me</h1>
        <p>I'm a UBC Computer Engineering graduate, with an interest in full-stack engineering.</p>
        <p>Besides building apps, I enjoy snowboarding, photography, playing piano/guitar, and gaming.</p>
        <p>
          I also build custom mechanical keyboards on my&nbsp;
          <a 
            rel="noopener noreferrer"
            href={youtubeLink}
            target="_blank"
            className="youtube-link"
            onClick={() => this.handleLinkClick("Keyboard Video")}
          >
            YouTube channel
          </a>
          !
        </p>
        <p>I'm a hackathon enthusiast with two 1st place prizes under my belt.</p>
        <p>Check out my work experience and projects below.</p>
      </div>
    );
  }
}

export default Bio;