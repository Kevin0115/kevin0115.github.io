import React, { Component } from 'react';
import LinkItem from './LinkItem';
import './Bio.css';

import Portrait from './images/portrait.JPG';
import Background from './images/background.jpeg';
import Resume from './images/resume.svg';
import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';

const linkItems = [
  {
    itemName: "GitHub",
    externalUrl: "https://github.com/Kevin0115",
    imageUrl: GitHub,
  },
  {
    itemName: "LinkedIn",
    externalUrl: "https://www.linkedin.com/in/kevinychoi/",
    imageUrl: LinkedIn,
  },
  {
    itemName: "Resume",
    externalUrl: "https://github.com/Kevin0115/resume/raw/master/Kevin-Choi-Resume.pdf",
    imageUrl: Resume,
  },
]

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

export default class Bio extends Component {
  render() {
    return (
      <div className="bio" style={backgroundStyle}>
        <div className="bio-portrait">
          <img className="portrait" src={Portrait} alt="portrait" />
        </div>
        <div className="bio-name">
          Kevin Choi | Software Engineer
        </div>
        <div className="bio-links">
          {this.renderLinkItems()}
        </div>
      </div>
    );
  }

  renderLinkItems() {
    return linkItems.map((item) => {
      return (
        <LinkItem key={item.itemName} {...item} />
      )
    });
  }
}