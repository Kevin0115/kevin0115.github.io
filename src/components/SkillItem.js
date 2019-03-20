import React, { Component } from 'react';
import '../css/SkillItem.css';

class SkillItem extends Component {
  render() {
    return (
      <div className="skill-item">
        <div className="layer-container">
          <img className="logo" src={this.props.logo} alt="" />
          <h3 className="layer">{this.props.layer}</h3>
        </div>
        <div className="each-skill">
          {this.props.skill.map((item) => {
            return (
              <p>{item}</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default SkillItem;