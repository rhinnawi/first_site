import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

function Footer(props) {
    return(
        <footer className="Footer">
            <Container fluid>
                <Row className="justify-contents-left align-items-center">
                    <Col>
                        <Link to="/">
                            <FontAwesomeIcon icon={ faLinkedin } size="lg"/>
                        </Link>
                        <span> Contact us at support@sunbirdweb.com</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;