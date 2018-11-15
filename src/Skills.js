import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/Skills.css';

import Background from './images/hobbiesbackground.jpeg';
import SkillItem from './components/SkillItem';

const backgroundStyle = {
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
};

const skillsContent = [
  {
    layer: "Front-end",
    skill: ["HTML", "CSS", "JavaScript", "React.js", "React Native"],
  },
  {
    layer: "Back-end",
    skill: ["Java", "Node.js", "MongoDB", "PHP", "Microservice Architecture"],
  },
  {
    layer: "Tools",
    skill: ["Git", "Mercurial", "Jenkins", "Nuclide/Atom", "GDB"],
  },
  {
    layer: "Low-level",
    skill: ["C", "ARM/MIPS/x86 Assembly", "Verilog", "ModelSim", "Quartus"],
  },
]

export default class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id={'skills-anchor'}>
      	<div className="skills" style={backgroundStyle}>
          <div className="skills-title">
            Technical Skills
          </div>
          <div className="skills-content">
            {this.renderSkills()}
          </div>
        </div>
   	  </ScrollableAnchor>
    );
  }

  renderSkills() {
    return skillsContent.map((item) => {
      return (
        <SkillItem key={item.layer} {...item} />
      )
    });
  }
}