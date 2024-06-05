import React from 'react';
import './HomePage.css';

const Home = () => { 
  return (
    <div className='bodyCenter'>
      <div className="top-container text-center">
        {/* <img className="cloud-top img-fluid" src="/images/floating-clouds.gif" alt="cloudimage" /> */}
        <h1 className="h1homepage">hi, I'm Joe</h1>
        <h2 className="h2homepage">Welcome to my neck of the woods!</h2>
        {/* <img className="mountain img-fluid" src="/images/mountains.jpg" alt="mountainimage" /> */}
        {/* <img className="cloud-bottom img-fluid" src="/images/floating-clouds-2.gif" alt="cloudimage" /> */}
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="profile-pic img-fluid" src="/images/profile-pic.png" alt="profile" />
          <h2>I'm glad you stopped by!</h2>
          <p className="intro">This site was built using React JS and is 100% custom built.</p>
          <p className="intro">Look around, play around, stick around.</p>
        </div>
        <hr />
        <div className="skills">
          <h2>What keeps me moving.</h2>
          <div className="skill-row">
            <img className="skillImage img-fluid" src="/images/shark.gif" alt="skill" />
            <h3 className="customhthree">Constantly Learning</h3>
            <p>There's a lot to learn and a lot to do. Staying on the move is key to helping me learn new skills and experience new joys. Don't take things <strong>too</strong> seriously</p>
          </div>
          <div className="skill-row">
            <img className="skillImage2 img-fluid" src="/images/skill.gif" alt="skill" />
            <h3 className="customhthree">Staying Balanced</h3>
            <p>Life is all about balance. I enjoy learning but there is a need for a balance: learn, have fun, and enjoy this short time we're on this pale blue dot</p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Let's stay in touch!</h2>
          {/* <h3>Want to discuss tech, nature, food, travel?</h3> */}
          <p className="contact-message">Want to discuss tech, nature, food, travel?</p>
          <p className="contact-message">Drop a line.</p>
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
