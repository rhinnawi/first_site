import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <Container fluid id="Footer">
        <Row className="justify-contents-left align-items-center">
          <Col>
            <Link to="/">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <span> LinkedIn</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span> E-mail us at support@sunbirdweb.com</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
