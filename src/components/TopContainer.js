import React from 'react';
import './TopContainer.css';

const TopContainer = () => {
  return (
    <div className="top-container text-center">
      <img className="cloud-top" src="/images/floating-clouds-2.gif" alt="cloudimage" />
      <h1>hi, I'm Joe</h1>
      <h2>I like to code</h2>
      <img src="/images/mountain.png" alt="mountainimage" />
      <img className="cloud-bottom" src="/images/floating-clouds-2.gif" alt="cloudimage" />
    </div>
  );
};

export default TopContainer;
