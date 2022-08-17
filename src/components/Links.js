import React, { Component } from 'react';
import '../css/Links.css';

import { LINK_VISIT } from '../Const';
import { postSession } from '../Utils';

import Resume from '../assets/images/resume.svg';
import GitHub from '../assets/images/github.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import YouTube from '../assets/images/youtube.svg';
import PDF from '../assets/Resume.pdf';

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
    externalUrl: PDF,
    imageUrl: Resume,
  },
  {
    itemName: "Youtube",
    externalUrl: "https://youtu.be/rYTiVv36eOY",
    imageUrl: YouTube,
  }
]

class Links extends Component {
  render() {
    return (
      <div className="links">
        {this.renderLinkItems()}
      </div>
    );
  }

  handleLinkClick(itemName) {
    postSession(LINK_VISIT + '=' + itemName);
  }

  renderLinkItems() {
    return linkItems.map((item) => {
      return (
        <div className="link-item" key={item.itemName}>
          <a
            rel="noopener noreferrer"
            className="link-item-title"
            href={item.externalUrl}
            target="_blank"
            onClick={() => this.handleLinkClick(item.itemName)}
          >
            <img src={item.imageUrl} alt={item.itemName}/>
          </a>
      </div>
      )
    });
  }
}

export default Links;