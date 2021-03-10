import React from "react";
import "./header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/TAP_logo.png";

const Header = ({ url }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href={`${url}/`}>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href={`${url}/#/about`}>About</Nav.Link>
            <Nav.Link href={`${url}/#/leadership`}>Leadership</Nav.Link>
            <Nav.Link href={`${url}/#/events`}>Events</Nav.Link>
            <Nav.Link href={`${url}/#/contact`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
