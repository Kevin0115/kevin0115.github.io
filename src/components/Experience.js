import React, { Component } from 'react';
import '../css/Experience.css';

import ExperienceItem from './ExperienceItem';
import Facebook from '../assets/images/facebook.png';
import SAP from '../assets/images/sap.png';
import UBC from '../assets/images/ubc.png';
import Amazon from '../assets/images/amazon.png';
import Facebook2 from '../assets/images/facebook2.png';
import SAP2 from '../assets/images/sap2.png';
import UBC2 from '../assets/images/ubc2.png';
import Amazon2 from '../assets/images/amazon2.png';

const experienceContents = [
  {
    company: "Amazon",
    position: "Software Development Engineer Intern",
    date: "May 2019 - Aug 2019",
    smallUrl: Amazon2,
    imageUrl: Amazon,
    description: [
      "Coming soon; I will be spending the upcoming summer term as an SDE intern for Amazon."
    ]
  },
  {
    company: "UBC",
    position: "Computer Science Teaching Assistant",
    date: "Sept 2018 - Dec 2018",
    smallUrl: UBC2,
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
    date: "May 2018 - Aug 2018",
    smallUrl: Facebook2,
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
    date: "May 2017 - Dec 2017",
    smallUrl: SAP2,
    imageUrl: SAP,
    description: [
      "Automated the daily merge process of 30+ workstream branches by establishing key prerequisites prior to merge",
      "Developed several Jenkins jobs to manage the workflow of builds and background tasks",
      "Ensured stability of SAP BusinessObjects Cloud by writing Python scripts to automate modularized UI tests",
    ],
  }
]

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h1>Experience</h1>
        {this.renderExperience()}
      </div>
    );
  }

  renderExperience() {
    return experienceContents.map((item) => {
      return (
        <ExperienceItem key={item.company} {...item} />
      )
    });
  }
}

export default Experience;