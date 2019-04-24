import React, { Component } from 'react';
import '../css/Projects.css';

import ProjectItem from './ProjectItem';
import ASAPSports from '../assets/images/asap-sports.png';
import Smartender from '../assets/images/smartender.png';
import IncognitoElf from '../assets/images/incognitoelf.png';
import PicMe from '../assets/images/picme.png';
import IssueExplorer from '../assets/images/issue-explorer.png';

const projectContents = [
  {
    projectName: "ASAP Sports",
    description: "Mobile application for finding sports games nearby. Yields the ability to join (or host) a game in the sport and capacity of your choosing.",
    tools: ["React Native", "Python", "Django", "PostgreSQL"],
    imageUrl: ASAPSports,
    githubUrl: "https://github.com/aidoraide/ASAP-Sports",
    demoUrl: "https://expo.io/@kevin0115/ASAP-Sports",
    id: "asap-sports"
  },
  {
    projectName: "Smartender",
    description: "An automated bartending machine controlled by a mobile application aimed to reduce lines at clubs and bars. Utilizes our own BarCoin cryptocurrency as a secure payment system.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB", "Python", "Blockchain", "Cloud", "Raspberry Pi"],
    imageUrl: Smartender,
    githubUrl: "https://github.com/Kevin0115/smartender",
    demoUrl: "https://expo.io/@kevin0115/smartender",
    youtubeUrl: "https://www.youtube.com/watch?v=o8KIC-9Z7Os&t",
    id: "smartender"
  },
  // Release this once PicMe has a foundation
  // {
  //   projectName: "PicMe",
  //   description: "[Work in Progress] Make booking a photoshoot as easy as ordering a pizza; find a local photographer that suits you and book a shoot. Integrated with Google Calendar, and featuring in-app messaging.",
  //   tools: ["React Native", "Python", "Django", "MongoDB", "Socket.io", "Node.js", "Express.js"],
  //   imageUrl: PicMe,
  //   githubUrl: null,
  //   demoUrl: null,
  //   id: "picme"
  // },
  {
    projectName: "IncognitoElf",
    description: "Grab a group of friends and organize a quick gift exchange with the help of IncognitoElf. Create or join a group, using a unique group code.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB"],
    imageUrl: IncognitoElf,
    githubUrl: "https://github.com/Kevin0115/IncognitoElf",
    demoUrl: "https://expo.io/@kevin0115/IncognitoElf",
    id: "incognitoelf"
  },
  {
    projectName: "GitHub Issue Explorer",
    description: "Browse/explore issues from any public GitHub repo. Simply enter a repo URL. Allows for filtering based on issue status (open, closed, etc.).",
    tools: ["ReactJS", "CSS3", "GitHub API"],
    imageUrl: IssueExplorer,
    githubUrl: "https://github.com/Kevin0115/github-issue-explorer/",
    demoUrl: "https://kevinchoi.dev/github-issue-explorer/",
    id: "issue-explorer"
  },
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