import React from 'react';
import './ProjectList.css';

const Project = ({ title, src }) => {
  return (
    <div className="projects-container">
      <h1>{title}</h1>
      <iframe src={src} title={title} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default Project;
