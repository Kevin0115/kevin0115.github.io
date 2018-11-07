import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Experience.css';

import Background from './images/expbackground.jpeg';
import ExperienceItem from './components/ExperienceItem';
import Facebook from './images/facebook.svg';
import SAP from './images/sap.svg';
import UBC from './images/ubc.jpg';

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

const experienceContents = [
  {
    company: "University of British Columbia",
    position: "Computer Science Teaching Assistant",
    date: "September 2018 - Present",
    imageUrl: UBC,
    description: [
      "Provided weekly individual guidance and instruction regarding course material during office hours",
      "Facilitated weekly lab sessions by assisting students with C++ programming and theory assignments",
      "Evaluated students' examinations and theory assignments by developing own grading rubric utilizing Gradescope"
    ],
  },
  {
    company: "Facebook",
    position: "Software Engineer Intern",
    date: "May 2018 - August 2018",
    imageUrl: Facebook,
    description: [
      "Developed an end-to-end metric consistency framework for Ads Manager to detect UI metric inconsistencies",
      "Configured database tables through which ad metric information was communicated through queries",
      "Refactored much of the existing React codebase and increased test coverage through unit and integration tests"
    ],
  },
  {
    company: "SAP",
    position: "Software Developer Intern",
    date: "May 2017 - December 2017",
    imageUrl: SAP,
    description: [
      "Automated the daily merge process of 30+ workstream branches by establishing key prerequisites prior to merge",
      "Developed several Jenkins jobs to manage the workflow of builds and background tasks",
      "Ensured stability of SAP BusinessObjects Cloud by writing Python scripts to automate modularized UI tests",
    ],
  }
]

export default class Experience extends Component {
  render() {
    return (
      <ScrollableAnchor id={'exp-anchor'}>
        <div className="experience" style={backgroundStyle}>
          <div className="experience-title">
            Technical Experience
          </div>
          <div className="experience-content">
            {this.renderExperienceContent()}
          </div>
        </div>
      </ScrollableAnchor>
    );
  }

  renderExperienceContent() {
    return experienceContents.map((item) => {
      return (
        <ExperienceItem key={item.company} {...item} />
      )
    });
  }
}