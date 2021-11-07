import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar(props) {
    const {Link} = Nav;
    const {Item, Divider} = NavDropdown;

    return(
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link href="#action1">Home</Link>
          <Link href="#action2">Link</Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <Item href="#action3">Action</Item>
            <Item href="#action4">Another action</Item>
            <Divider />
            <Item href="#action5">
              Something else here
            </Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    );
}

export default Sidebar;