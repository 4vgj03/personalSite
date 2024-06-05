import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

// Import images directly
import bandGeneratorImage from '../../src/assets/images/band-name-generator.png';
import toDoListImage from '../../src/assets/images/todo-list-3.png';
import weatherAppImage from '../../src/assets/images/weather-3.png';
import simonGameImage from '../../src/assets/images/simon-says-2.png';

const projects = [
  {
    title: 'Band Name Generator',
    imageUrl: bandGeneratorImage,
    link: '/projects/bandgenerator/',
  },
  {
    title: 'To Do List',
    imageUrl: toDoListImage,
    link: '/projects/to-do-list',
  },
  {
    title: 'Weather App',
    imageUrl: weatherAppImage,
    link: '/projects/weatherapp',
  },
  {
    title: 'Simon Game',
    imageUrl: simonGameImage,
    link: '/projects/simongame',
  },
  // Add more projects here
];

const ProjectList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="projects-container">
      <h1 className="header-projects">Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <Link to={project.link}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </Link>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
