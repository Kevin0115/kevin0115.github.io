import React, { Component } from 'react';
import '../css/Links.css';

import Resume from '../assets/images/resume.svg';
import GitHub from '../assets/images/github.svg';
import LinkedIn from '../assets/images/linkedin.svg';
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

  renderLinkItems() {
    return linkItems.map((item) => {
      return (
        <div className="link-item" title={item.itemName}>
        <a
          rel="noopener noreferrer"
          className="link-item-title"
          href={item.externalUrl}
          target="_blank"
        >
        <img src={item.imageUrl} alt={item.itemName}/>
        </a>
      </div>
      )
    });
  }
}

export default Links;