import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Projects.css';

import Background from './images/projectbackground.jpeg'
import ProjectItem from './components/ProjectItem';
import ASAPSports from './images/logotext.png';
import UBCFeedMe from './images/ubcfeedme.PNG';


const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

const projectContent = [
  {
    projectName: "ASAP Sports",
    description: "Mobile application for finding sports games nearby. Yields the ability to join an existing game, or host a game of your own, in the sport and capacity of your choosing!",
    tools: ["React Native", "Python", "Django", "PostgreSQL"],
    imageUrl: ASAPSports,
    externalUrl: "https://github.com/aidoraide/ASAP-Sports",
  },
  {
    projectName: "UBC FeedMe",
    description: "Hungry? Use UBC FeedMe to search for events around campus, to find events offering free food! Uses the Facebook Graph API to collect data from various UBC groups.",
    tools: ["Python", "JavaScript"],
    imageUrl: UBCFeedMe,
    externalUrl: "https://github.com/Kevin0115/UBCFeedMe",
  },
]

export default class Projects extends Component {
  render() {
    return (
      <ScrollableAnchor id={'projects-anchor'}>
        <div className="projects" style={backgroundStyle}>
          <div className="projects-title">
            Projects
          </div>
          <div className="projects-content">
            {this.renderProjects()}
          </div>
        </div>
      </ScrollableAnchor>
    );
  }

  renderProjects() {
    return projectContent.map((item) => {
      return (
        <ProjectItem key={item.projectName} {...item} />
      )
    });
  }
}