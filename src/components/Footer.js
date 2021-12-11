import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return(
        <footer className="Footer">
            <Container fluid>
                <Row className="justify-contents-left align-items-center">
                    <Col>
                        <Button href="#">
                            <FontAwesomeIcon icon={ faLinkedin } />
                        </Button>
                        <span> Contact us at support@sunbirdweb.com</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;