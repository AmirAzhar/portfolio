import "../css/navigation.css";

import { Navbar, Nav } from "react-bootstrap";
import cv from "../resources/cv.pdf";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link className="resumeBtn" href={cv} target="_blank">
            CV
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
