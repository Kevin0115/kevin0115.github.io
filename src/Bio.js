import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import LinkItem from './components/LinkItem';
import './css/Bio.css';

import Portrait from './images/portrait.JPG';
import Background from './images/biobackground.jpeg';
import Resume from './images/resume.svg';
import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';
import Instagram from './images/instagram.svg';

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

const tableContents = [
  {
    section: "#exp-anchor",
    label: "Experience",
  },
  {
    section: "#skills-anchor",
    label: "Skills",
  },
  {
    section: "#projects-anchor",
    label: "Projects",
  },
  {
    section: "#photo-anchor",
    label: "Photography",
  },
]

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
    itemName: "Instagram",
    externalUrl: "https://www.instagram.com/kevnchoi/",
    imageUrl: Instagram,
  },
  {
    itemName: "Resume",
    externalUrl: "https://github.com/Kevin0115/resume/raw/master/Kevin-Choi-Resume.pdf",
    imageUrl: Resume,
  }
]

export default class Bio extends Component {
  render() {
    return (
      <ScrollableAnchor id={'bio-anchor'}>
        <div className="bio" style={backgroundStyle}>
          <div className="bio-table-contents">
            {this.renderTableContents()}
          </div>
          <div className="bio-contents">
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
          
        </div>
      </ScrollableAnchor>
    );
  }

  renderLinkItems() {
    return linkItems.map((item) => {
      return (
        <LinkItem key={item.itemName} {...item} />
      )
    });
  }

  renderTableContents() {
    return tableContents.map((item) => {
      return (
        <div className="linkContainer">
          <a key={item.section} href={item.section} className="contentLink">{item.label}</a>
        </div>
      )
    });
  }
}