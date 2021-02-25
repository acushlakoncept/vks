import React from 'react';
import {
  Navbar, Nav, NavDropdown, Container,
} from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu';
import logo from '../images/logo.png';

function MainNav() {
  return (
    <div className="main-nav sticky-top">
      {/* <img src={logo} className="logo" alt="logo" /> */}
      <Container className="text-center">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdownMenu title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Company Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mission, Vision &amp; Values</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ethics &amp; Compliance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Our Offices</NavDropdown.Item>
              </NavDropdownMenu>
              <NavDropdownMenu title="What We Do" id="collasible-nav-dropdown">
                <DropdownSubmenu href="#action/3.7" title="Engineering Construction">
                  <NavDropdown.Item href="#action/8.1">Infrastructure</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.1">Civil Works</NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu href="#action/3.7" title="Industry">
                  <NavDropdown.Item href="#action/8.1">Medical Manufacturing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.1">Flour Mills</NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu href="#action/3.7" title="Trade &amp; Logistics">
                  <NavDropdown.Item href="#action/8.1">Procurement</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.1">Logistics</NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>
              <NavDropdownMenu title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Completed</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Uncompleted</NavDropdown.Item>
              </NavDropdownMenu>
              <NavDropdownMenu title="Subsidiaries" id="collasible-nav-dropdown">
                <DropdownSubmenu href="#action/3.7" title="Engineering Construction">
                  <NavDropdown.Item href="#action/8.1">VKS Construction</NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>
              <NavDropdownMenu title="Social Responsibility" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">VKS Foundation</NavDropdown.Item>
              </NavDropdownMenu>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default MainNav;
