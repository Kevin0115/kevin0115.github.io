import React, { Component } from 'react';
import '../css/Bio.css';

import { LINK_VISIT } from '../Const';
import { postSession } from '../Utils';

const youtubeLink = "https://www.youtube.com/watch?v=IybIOMcP_TA&feature=youtu.be"
const twitchLink = "https://www.twitch.tv/kevjevtv"

class Bio extends Component {
  handleLinkClick(itemName) {
    postSession(LINK_VISIT + '=' + itemName);
  }

  render() {
    return (
      <div className="bio">
        <h1>About Me</h1>
        <p>I'm a UBC Computer Engineering graduate, with an interest in full-stack engineering.</p>
        <p>Besides building apps, I enjoy snowboarding, photography, playing piano/guitar, and&nbsp;
          <a 
            rel="noopener noreferrer"
            href={twitchLink}
            target="_blank"
            className="twitch-link"
            onClick={() => this.handleLinkClick("Twitch")}
          >
            gaming
          </a>
          .
        </p>
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
        <p>I attend as many hackathons as I can, and have had the privilege of winning twice.</p>
        <p>Check out my work experience and projects below.</p>
      </div>
    );
  }
}

export default Bio;