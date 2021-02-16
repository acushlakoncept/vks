import React from 'react';
import { Container } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';

function TopNav() {
  return (
    <div className="top-menu pt-3">
      <Container>
        <nav className="nav d-flex justify-content-between">
          <div className="icons">
            <a target="_blank" rel="noreferrer" className="pr-3" href="https://twitter.com/VKSConstruction">
              <FaTwitter fill="#00acee" />
            </a>
            <a target="_blank" rel="noreferrer" className="pr-3" href="https://www.facebook.com/VKS-Construction-164112374080641/">
              <FaFacebookF fill="#3b5998" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/vks-construction">
              <FaLinkedin fill="#0e76a8" />
            </a>
          </div>
          <div className="menu">
            <a className="pr-3" href="#career">Career</a>
            <a className="pr-3" href="#terms">Terms of Use</a>
            <a className="pr-3" href="#policy">Policy</a>
            <a className="pr-3" href="#News">News</a>
            <a href="#contact">Contact Us</a>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default TopNav;
