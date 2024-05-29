import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="/projects/bandgenerator/">Band Generator</Link>
        </li>
        <li>
          <Link to="/projects/to-do-list">To Do List</Link>
        </li>
        <li>
          <Link to="/projects/weatherapp">Weather</Link>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
};

export default ProjectList;
