import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './TopContainer.css';

const TopContainer = () => {
  return (
    <div className="top-container text-center">
      <img className="cloud-top img-fluid" src="/images/floating-clouds-2.gif" alt="cloudimage" />
      <h1>hi, I'm Joe</h1>
      <h2>I like to code</h2>
      <img className="mountain img-fluid" src="/images/mountain.png" alt="mountainimage" />
      <img className="cloud-bottom img-fluid" src="/images/floating-clouds-2.gif" alt="cloudimage" />
    </div>
  );
};

export default TopContainer;
