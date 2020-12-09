import React, { Component } from 'react';
import './Projects.css';
import tmLogo from './TM-logo.png';
import faLogo from './5A-logo.png';
import otterLogo from './otter-logo-lowres.png'

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: '#5ALIVE',
          description: 'Web platform for a college basketball contest with a live chat module',
          logo: faLogo,
          isHovered: false,
          url: 'https://five-alive-bball.herokuapp.com/'
        },
        {
          title: 'TriviaMasters',
          description: 'Mobile trivia application that tests both knowledge and patience',
          logo: tmLogo,
          isHovered: false,
          url: ''
        },
        {
          title: 'Otter.io',
          description: 'Project management tool that integrates with Github repositories and includes both a web client and command line interface',
          logo: otterLogo,
          isHovered: false,
          url: 'https://otter-io.herokuapp.com/'
        }
      ],
      isHovered: false
    }
  }


  handleMouseEnter(i) {
    const projects = [...this.state.projects]
    projects[i].isHovered = true;
    this.setState({ projects })
  }

  handleMouseLeave(i) {
    const projects = [...this.state.projects]
    projects[i].isHovered = false;
    this.setState({ projects })
  }

  render() {
    return (
      <div className="Projects">
        {this.state.projects.map((project, i) => {
          return (
            <div className={`${i} container`} onMouseEnter={() => this.handleMouseEnter(i)} onMouseLeave={() => this.handleMouseLeave(i)}>
              <a href={project.url} target="_blank">
              
              <img className={i.toString()} src={project.logo} />
              
              {project.isHovered && 
                <div className={i.toString()}>
                  <h1 className={i.toString()}>{project.title}</h1>
                  <p className={i.toString()}>{project.description}</p>
                </div>
              }
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
