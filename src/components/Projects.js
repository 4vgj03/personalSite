import React from 'react';

const Project = ({ title, src }) => {
  return (
    <div>
      <h1>{title}</h1>
      <iframe src={src} title={title} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default Project;
