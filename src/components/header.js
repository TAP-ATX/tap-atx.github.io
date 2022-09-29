import React from "react"
import "./header.scss"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../images/TAP_logo.png"

const HashNavLink = ({ url, path, title }) => {
  return <Nav.Link href={`${url}/#/${path}`}>{title}</Nav.Link>
}

const Header = ({ url }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href={`${url}/`}>
          <img src={logo} className="app-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <HashNavLink url={url} path="calendar" title="Calendar" />
            <HashNavLink url={url} path="about" title="About" />
            <HashNavLink url={url} path="leadership" title="Leadership" />
            <HashNavLink url={url} path="contact" title="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
