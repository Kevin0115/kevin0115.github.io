import React, { Component } from 'react';
import '../css/Skills.css';

import SkillItem from './SkillItem';
import FrontEnd from '../assets/images/web.svg';
import BackEnd from '../assets/images/database.svg';
import Tools from '../assets/images/tools.svg';

const skillsContents = [
  {
    layer: 'Front-end',
    skill: ['React.js', 'React Native', 'HTML5/CSS3', 'JavaScript', 'Bootstrap', 'Vue.js'],
    logo: FrontEnd
  },
  {
    layer: 'Back-end',
    skill: ['Java', 'Python/Flask', 'Node/Express', 'C/C++', 'PostgreSQL', 'MongoDB'],
    logo: BackEnd
  },
  {
    layer: 'Tools',
    skill: ['AWS', 'Google Cloud', 'Git/Mercurial', 'JetBrains IDE', 'Linux', 'Docker'],
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