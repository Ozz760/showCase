import React from "react";
import "./NavTabs.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';


function NavTabs() {
  return (
    <Navbar fixed="top" className="justify-content-end" id="nav" activeKey="/home">
      <Container>
      <Nav.Item>
        <Nav.Link href="#aboutme">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#project">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Resume</Nav.Link>
      </Nav.Item>
      </Container>
    </Navbar>
  );
}


export default NavTabs;
