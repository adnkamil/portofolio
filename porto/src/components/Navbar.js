import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default () => {
  const onContentIndexClick = (section) => {
    const element = document.getElementById(section)
    element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Navbar variant="dark" className="green fixed-top">
      <div className="container">
      <Navbar.Brand>PONAN</Navbar.Brand>
      <div>
        <Nav className="mr-auto">
          <a href="#top" onClick={() => onContentIndexClick('top')} className="nav-link navigati">Home</a>
          <a href="#projects" onClick={() => onContentIndexClick('projects')} className="nav-link navigati">Project</a>
        </Nav>
      </div>

      </div>
    </Navbar>
  );
};
