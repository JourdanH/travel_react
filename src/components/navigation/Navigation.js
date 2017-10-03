import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
/* <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        <a className="navbar-brand" href="#">My Travel Site</a>
      </div>

      
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Stuff</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>

  </nav> */


<Navbar inverse fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">My Travel Site</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Home</MenuItem>
          <MenuItem eventKey={3.2}>About</MenuItem>
          <MenuItem eventKey={3.3}>stuff</MenuItem>
          <MenuItem eventKey={3.3}>Contact</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={1} href="#">Stuff</NavItem>
        <NavItem eventKey={2} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}




export default Navigation;