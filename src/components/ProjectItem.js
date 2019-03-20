import React, { Component } from 'react';
import '../css/ProjectItem.css';

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item" id={this.props.id}>
        <div className="project-background" />
        <div className="project-content">
          <h2 className="project-name">{this.props.projectName}</h2>
          <p className="project-description">{this.props.description}</p>
          <div className="tools">
            {this.renderTools()}
          </div>
        </div>
        <a
          rel="noopener noreferrer"
          className="project-link"
          href={this.props.externalUrl}
          target="_blank"
        >
         <img className="project-image" src={this.props.imageUrl} alt="" />
        </a>
      </div>
    );
  }

  renderTools() {
    return this.props.tools.map((item) => {
      return (
        <p className="tool">{item}</p>
      )
    });
  }
}

ProjectItem.defaultProps = {
  projectName: "Project Name",
  description: "Mobile application for finding sports games nearby. Yields the ability to join (or host) a game in the sport and capacity of your choosing!",
  tools: ["React Native", "Python", "Django", "PostgreSQL"],
  imageUrl: null,
  externalUrl: "https://github.com/aidoraide/ASAP-Sports",
}

export default ProjectItem;