import React from "react";
import "./NavTabs.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const Resume = require("./images/SD-Resume.pdf");

function NavTabs() {
  return (
    <Navbar
      fixed="top"
      className="justify-content-end"
      id="nav"
      activeKey="/home"
    >
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
          <Nav.Link href={Resume} target="_blank" rel="noreferrer">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
