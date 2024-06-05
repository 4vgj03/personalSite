import React from 'react';
import './MiddleContainer.css';

const MiddleContainer = () => {
  return (
    <div className="middle-container">
      <div className="profile">
        <img src="/images/profile-pic.png" alt="profile" />
        <h2>Hi, I'm Joe glad you're here.</h2>
        <p className="intro">This site is 100% custom built using React with a hint of Bootstrap and Flexbo, among other skills.</p>
        <p className="intro">Please browse around!</p>
      </div>
      <hr />
      <div className="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <img className="skillImage" src="/images/shark.gif" alt="skill" />
          <h3 className="headingthreecustom">Constantly Learning</h3>
          <p>There's so much to learn and I try to learn something new every day.</p>
        </div>
        <div className="skill-row">
          <img className="skillImage2" src="/images/skill.gif" alt="skill" />
          <h3 className = "headingthreecustom">Stay Balanced</h3>
          <p>It's important to not work all the time. Life is all about balance. Moving forward, staying healthy, and enjoying our time on this pale blue dot.</p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <h3>Lorem ipsum dolor sit amet, non elit.</h3>
        <p className="contact-message">Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
        <a className="btn" href="mailto:name@email.com">CONTACT ME</a>
      </div>
    </div>
  );
};

export default MiddleContainer;
