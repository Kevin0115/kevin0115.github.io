import React, { Component } from 'react';
import '../css/Projects.css';

import ProjectItem from './ProjectItem';
import ASAPSports from '../assets/images/asap-sports.png';
import Smartender from '../assets/images/smartender.png';
import IncognitoElf from '../assets/images/incognitoelf.png';
import PDS from '../assets/images/pds2.png';
import IssueExplorer from '../assets/images/issue-explorer.png';

const projectContents = [
  {
    projectName: "ASAP Sports",
    description: "Mobile application for finding sports games nearby. Yields the ability to join (or host) a game in the sport and capacity of your choosing.",
    tools: ["React Native", "Python", "Django", "PostgreSQL"],
    imageUrl: ASAPSports,
    externalUrl: "https://github.com/aidoraide/ASAP-Sports",
    id: "asap-sports"
  },
  {
    projectName: "Smartender",
    description: "An automated bartending machine controlled by a mobile application aimed to reduce lines at clubs and bars. Currently a work in progress by a team of student engineers.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB", "AWS", "Raspberry Pi"],
    imageUrl: Smartender,
    externalUrl: "https://github.com/Kevin0115/smartender",
    id: "smartender"
  },
  {
    projectName: "IncognitoElf",
    description: "Grab a group of friends and organize a quick gift exchange with the help of IncognitoElf. Create or join a group, using a unique group code.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB"],
    imageUrl: IncognitoElf,
    externalUrl: "https://github.com/Kevin0115/IncognitoElf",
    id: "incognitoelf"
  },
  {
    projectName: "GitHub Issue Explorer",
    description: "Browse/explore issues from any public GitHub repo. Simply enter a repo URL. Allows for filtering based on issue status (open, closed, etc.).",
    tools: ["ReactJS", "CSS3", "GitHub API"],
    imageUrl: IssueExplorer,
    externalUrl: "https://kevnchoi.com/github-issue-explorer/",
    id: "issue-explorer"
  },
  {
    projectName: "Patient Distribution System",
    description: "A medical patient clinic decongestion system. Uses a DE1-SoC as a check-in kiosk, which then provides the patient the option to go to another nearby clinic with short wait times.",
    tools: ["ReactJS", "CSS3", "Node.js", "Express.js", "Twilio API"],
    imageUrl: PDS,
    externalUrl: "https://kevnchoi.com/PDS",
    id: "pds"
  }
];

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        {this.renderProjects()}
      </div>
    );
  }

  renderProjects() {
    return projectContents.map((item) => {
      return (
        <ProjectItem key={item.id} {...item} id={item.id}/>
      )
    });
  }
}

export default Projects;