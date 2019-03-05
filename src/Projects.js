import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Projects.css';

import Background from './images/projectbackground.jpeg'
import ProjectItem from './components/ProjectItem';
import ASAPSports from './images/asapsports.png';
import IncognitoElf from './images/incognitoelf.png';
import UBCFeedMe from './images/ubcfeedme.png';
import IssueExplorer from './images/issueexplorer.png';


const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

const projectContent = [
  {
    projectName: "ASAP Sports",
    description: "Mobile application for finding sports games nearby. Yields the ability to join (or host) a game in the sport and capacity of your choosing!",
    tools: ["React Native", "Python", "Django", "PostgreSQL"],
    imageUrl: ASAPSports,
    externalUrl: "https://github.com/aidoraide/ASAP-Sports",
  },
  {
    projectName: "IncognitoElf",
    description: "Grab a group of friends and organize a quick gift exchange with the help of IncognitoElf. Create or join a group, using a unique group code.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB"],
    imageUrl: IncognitoElf,
    externalUrl: "https://github.com/Kevin0115/IncognitoElf",
  },
  {
    projectName: "GitHub Issue Explorer",
    description: "GitHub Issue Explorer. Browse/explore issues from any public GitHub repo! Simply enter a repo URL. Allows for filtering based on issue status (open, closed, etc.).",
    tools: ["ReactJS", "GitHub API"],
    imageUrl: IssueExplorer,
    externalUrl: "http://kevnchoi.com/github-issue-explorer/",
  },
  {
    projectName: "UBC FeedMe",
    description: "Hungry? Use UBC FeedMe to search for free food events around campus! Uses the Facebook Graph API to collect data from various UBC groups.",
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