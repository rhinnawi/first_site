import React from 'react';
import '../styles/Header.css';
import Sidebar from "./Sidebar";
import {Navbar, Container} from "react-bootstrap";

function Header(props) {
    const {Brand, Toggle} = Navbar;
    return(
        <header className="Header">
            <Container fluid>
                <Navbar expand={false}>
                    <Brand href='#'>Sunbird Web</Brand>
                    <Toggle aria-controls="offcanvasNavbar" />
                    <Sidebar />
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;