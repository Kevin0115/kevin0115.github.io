import React, { Component } from 'react';
import '../css/Projects.css';

import ProjectItem from './ProjectItem';
import ASAPSports from '../assets/images/asap-sports.png';
import Smartender from '../assets/images/smartender.png';
import SuperRent from '../assets/images/superrent.png';
import IncognitoElf from '../assets/images/incognitoelf.png';
import IssueExplorer from '../assets/images/issue-explorer.png';

const projectContents = [
  {
    projectName: "Smartender",
    description: "An automated bartending machine controlled by a mobile application aimed to reduce lines at clubs and bars. Utilizes our own BarCoin cryptocurrency as a secure payment system.",
    tools: ["React Native", "Node.js", "Express.js", "MongoDB", "Python", "Blockchain", "AWS", "Raspberry Pi"],
    imageUrl: Smartender,
    githubUrl: "https://github.com/Kevin0115/smartender",
    demoUrl: "https://expo.io/@kevin0115/smartender",
    youtubeUrl: "https://www.youtube.com/watch?v=o8KIC-9Z7Os&t",
    id: "smartender"
  },
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
    projectName: "SuperRent",
    description: "Browse a wide selection of vehicles, create/view/cancel a reservation, or book a rental. SuperRent is an all-inclusive platform for car rentals; includes both Client and Clerk roles.",
    tools: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    imageUrl: SuperRent,
    githubUrl: "https://github.com/Kevin0115/SuperRent",
    demoUrl: "https://www.kevinchoi.dev/SuperRent",
    id: "superrent"
  },
  // {
  //   projectName: "IncognitoElf",
  //   description: "Grab a group of friends and organize a quick gift exchange with the help of IncognitoElf. Create or join a group, using a unique group code.",
  //   tools: ["React Native", "Node.js", "Express.js", "MongoDB"],
  //   imageUrl: IncognitoElf,
  //   githubUrl: "https://github.com/Kevin0115/IncognitoElf",
  //   demoUrl: "https://expo.io/@kevin0115/IncognitoElf",
  //   id: "incognitoelf"
  // },
  {
    projectName: "GitHub Issue Explorer",
    description: "Browse/explore issues from any public GitHub repo. Simply enter a repo URL. Allows for filtering based on issue status (open, closed, etc.).",
    tools: ["React.js", "CSS3", "GitHub API"],
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