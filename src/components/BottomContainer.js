import React from 'react';
import './BottomContainer.css';

const BottomContainer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bottom-container text-center gradient-background">
      <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
      <a className="footer-link" href="https://twitter.com/">Twitter</a>
      <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
      <p className="copyright">©{currentYear} Joseph Mather</p>
    </div>
  );
};

export default BottomContainer;
