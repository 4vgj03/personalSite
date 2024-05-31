import React from 'react';
import './HomePage.css';  // Ensure you create and style this CSS file

const Home = () => {
  return (
    <div className='bodyCenter'>
      <div className="top-container">
        <img className="cloud-top" src="/images/floating-clouds-2.gif" alt="cloudimage" />
        <h1 className="h1homepage">hi, I'm Joe</h1>
        <h2>I like to code</h2>
        <img src="/images/mountain.png" alt="mountainimage" />
        <img className="cloud-bottom" src="/images/floating-clouds-2.gif" alt="cloudimage" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img src="/images/profile-pic.png" alt="profile" />
          <h2>Hello.</h2>
          <p className="intro">Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes nulla distinctio.</p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="skillImage" src="/images/shark.gif" alt="skill" />
            <h3 className="customhthree">Lorem & Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
          </div>
          <div className="skill-row">
            <img className="skillImage2" src="/images/skill.gif" alt="skill" />
            <h3 className="customhthree">Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>Lorem ipsum dolor sit amet, non elit.</h3>
          <p className="contact-message">Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
          <a className="btn ahrefcustom" href="/contact">CONTACT ME</a>
        </div>
      </div>
      {/* <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
        <p className="copyright">© Joseph Mather.</p>
      </div> */}
    </div>
  );
};

export default Home;
