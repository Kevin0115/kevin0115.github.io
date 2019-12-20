import React, { Component } from 'react';
import '../css/Projects.css';

import ProjectItem from './ProjectItem';
import ASAPSports from '../assets/images/asap-sports.png';
import Smartender from '../assets/images/smartender.png';
import HelpingHand from '../assets/images/hands.png';
import SuperRent from '../assets/images/superrent.png';
import IssueExplorer from '../assets/images/issue-explorer.png';
import Metrics from '../assets/images/metrics.png';

const projectContents = [
  {
    projectName: "Helping Hand",
    subtitle: "1st Place @ UBC Local Hack Day 2019",
    description: "Lend a helping hand to those in need. Helping Hand is a full-stack web solution that enables seamless donations to homeless people without smartphones/laptops, through the use of physical QR codes.",
    tools: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    imageUrl: HelpingHand,
    githubUrl: "https://github.com/Kevin0115/HelpingHand",
    demoUrl: "https://devpost.com/software/helpinghand-a4swt1",
    id: "helpinghand"
  },
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
    projectName: "GitHub Issue Explorer",
    description: "Browse/explore issues from any public GitHub repo. Simply enter a repo URL. Allows for filtering based on issue status (open, closed, etc.).",
    tools: ["React.js", "CSS3", "GitHub API"],
    imageUrl: IssueExplorer,
    githubUrl: "https://github.com/Kevin0115/github-issue-explorer/",
    demoUrl: "https://kevinchoi.dev/github-issue-explorer/",
    id: "issue-explorer"
  },
  {
    projectName: "Personal Site Metrics",
    description: "A clean, simple UI to view the visitor activity of this site (the one you're on right now). View history per session, or view activity by event category/date.",
    tools: ["React.js", "React Bootstrap", "React-Vis", "Node.js", "Express.js", "PostgreSQL"],
    imageUrl: Metrics,
    githubUrl: "https://github.com/Kevin0115/PersonalSiteMetrics",
    demoUrl: "https://www.kevinchoi.dev/PersonalSiteMetrics",
    id: "metrics"
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