import React from 'react';
import { Container } from 'react-bootstrap';

function TopNav() {
  return (
    <div className="top-menu pt-3">
      <Container>
        <nav className="nav d-flex justify-content-between">
          <div className="icons">
            <a className="pr-3" href="#twitter">twitter</a>
            <a className="pr-3" href="#facebook">facebook</a>
            <a href="#linkedin">linkedin</a>
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
