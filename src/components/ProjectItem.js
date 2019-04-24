import React, { Component } from 'react';
import '../css/ProjectItem.css';

import GitHub from '../assets/images/github.svg';
import Link from '../assets/images/link.svg';
import YouTube from '../assets/images/youtube.svg';

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
          {this.renderLinks()}
        </div>
        <img className="project-image" src={this.props.imageUrl} alt="" />
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

  renderLinks() {
    return (
      <div className="links">
        {
          this.props.githubUrl ?
          <a
            rel="noopener noreferrer"
            className="url-link"
            href={this.props.githubUrl}
            target="_blank"
          >
            <img src={GitHub} alt=""/>
            <p>Source</p>
          </a>
          :
          null
        }
        {
          this.props.demoUrl ?
          <a
            rel="noopener noreferrer"
            className="url-link"
            href={this.props.demoUrl}
            target="_blank"
          >
            <img src={Link} alt=""/>
            <p>Demo</p>
          </a>
          :
          null
        }
        {
          this.props.youtubeUrl ?
          <a
            rel="noopener noreferrer"
            className="url-link"
            href={this.props.youtubeUrl}
            target="_blank"
          >
            <img src={YouTube} alt=""/>
            <p>Watch</p>
          </a>
          :
          null
        }
      </div>
    )
  }
}

export default ProjectItem;