import React, { Component } from 'react';
import '../css/Skills.css';

import SkillItem from './SkillItem';
import FrontEnd from '../assets/images/web.svg';
import BackEnd from '../assets/images/database.svg';
import Tools from '../assets/images/tools.svg';

const skillsContents = [
  {
    layer: 'Front-end',
    skill: ['ReactJS', 'React Native', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    logo: FrontEnd
  },
  {
    layer: 'Back-end',
    skill: ['Java', 'Node.js', 'Express.js', 'C/C++', 'PostgreSQL', 'MongoDB',],
    logo: BackEnd
  },
  {
    layer: 'Tools',
    skill: ['AWS', 'Git/Mercurial', 'JUnit/Mockito', 'Linux', 'Docker', 'Jenkins'],
    logo: Tools
  }
];


class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-content">
          {this.renderSkills()}
        </div>
      </div>
    );
  }

  renderSkills() {
    return skillsContents.map((item, i) => {
      return (
        <SkillItem key={i} {...item}/>
      )
    });
  }
}

export default Skills;