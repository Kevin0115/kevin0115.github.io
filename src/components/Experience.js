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
    team: "Tax Engine Machine Learning",
    position: "Software Development Engineer",
    date: "July 2020 - Present",
    smallUrl: Amazon2,
    imageUrl: Amazon,
    description: [
      "Working on innovative new ways to delegate machine learning in the product tax classification space"
    ]
  },
  {
    company: "Amazon",
    team: "Tax Engine Machine Learning",
    position: "Software Development Engineer Intern",
    date: "May 2019 - July 2019",
    smallUrl: Amazon2,
    imageUrl: Amazon,
    description: [
      "Delivered an end-to-end machine learning-based service for determining the Product Tax Code for a given set of product ID numbers",
      "Fully self-designed the UI, API, and backend workflow; final product refined through user acceptance testing as well as integration and unit tests",
      "Utilized numerous AWS services such as Lambda, Step Functions, DynamoDB, Batch, API Gateway, Elastic Map Reduce, CloudFormation, and more"
    ]
  },
  {
    company: "Facebook",
    team: "Ads Manager and Metrics",
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
    team: "Quality Tools and Infrastructure",
    position: "Software Developer Intern",
    date: "May 2017 - Dec 2017",
    smallUrl: SAP2,
    imageUrl: SAP,
    description: [
      "Automated the daily merge process of 30+ workstream branches by establishing key prerequisites prior to merge",
      "Developed several Jenkins jobs to manage the workflow of builds and background tasks",
      "Ensured stability of SAP BusinessObjects Cloud by writing Python scripts to automate modularized UI tests",
    ],
  },
  {
    company: "UBC",
    team: "Algorithms and Data Structures",
    position: "Computer Science Teaching Assistant",
    date: "Sept 2018 - April 2020",
    smallUrl: UBC2,
    imageUrl: UBC,
    description: [
      "Provided weekly individual guidance and instruction regarding course material during office hours",
      "Facilitated weekly lab sessions by assisting students with C++ programming and theory assignments",
      "Evaluated students' examinations and theory assignments by developing own grading rubric utilizing Gradescope"
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
