import React, { Component } from 'react';
import '../css/Bio.css';

import { LINK_VISIT } from '../Const';
import { postSession } from '../Utils';

const youtubeLink = "https://youtu.be/rYTiVv36eOY"
const twitchLink = "https://www.twitch.tv/kevjevtv"
const hackathonLink = "https://medium.com/nwplusubc/build-day-2019-winning-projects-41b731bf8261#:~:text=Team%3A%20Edmund%20Oh%2C%20Emma%20Oh%2C%20Dooyong%20Pan%2C%20Gary%20Hwu%2C%20Kevin%20Choi";

class Bio extends Component {
  handleLinkClick(itemName) {
    postSession(LINK_VISIT + '=' + itemName);
  }

  render() {
    return (
      <div className="bio">
        <h1>About Me</h1>
        <p>I'm a UBC Computer Engineering graduate, with an interest in full-stack engineering.</p>
        <p>Besides building apps, I enjoy golfing, snowboarding, playing piano/guitar, and&nbsp;
          {/* <a 
            rel="noopener noreferrer"
            href={twitchLink}
            target="_blank"
            className="twitch-link"
            onClick={() => this.handleLinkClick("Twitch")}
          >
            gaming
          </a> */}
          gaming.
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
        <p>I love attending hackathons, and have had the honour of&nbsp;
        <a 
            rel="noopener noreferrer"
            href={hackathonLink}
            target="_blank"
            className="hackathon-link"
            onClick={() => this.handleLinkClick("Hackathon")}
          >
            winning twice
          </a>
          .
        </p>
        <p>Check out my work experience and projects below.</p>
      </div>
    );
  }
}

export default Bio;