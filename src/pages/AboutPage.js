import React, { useState } from "react";
import { Nav, Tab, Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import HomePage from "./HomePage";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("aboutUs");

  // When a tab is selected, change its entire background
  const handleTabColor = (eventKey, e) => {
    console.log(`eventkey: ${eventKey}, prevActiveTab: ${activeTab}`);
    console.log(`eventkey type: ${typeof eventKey}`);
    console.log(e);
    document.getElementById(activeTab).style.backgroundColor = "transparent";
    document.getElementById(eventKey).style.backgroundColor = "lightgrey";
    setActiveTab(eventKey);
  };

  return (
    <Tab.Container
      id="AboutPage"
      defaultActiveKey="aboutUs"
      onSelect={(eventKey, e) => handleTabColor(eventKey, e)}
    >
      <Container fluid>
        <Row className="p-0">
          <Col xs={2} className="p-0">
            <Nav
              fill
              className="flex-column"
              style={{ height: "100%" }}
              id="aboutPageNav"
            >
              <Nav.Item id="aboutUs" className="tab">
                <Nav.Link eventKey="aboutUs">About Sunbird Web</Nav.Link>
              </Nav.Item>
              <Nav.Item id="aboutMatt" className="tab">
                <Nav.Link eventKey="aboutMatt">Matt</Nav.Link>
              </Nav.Item>
              <Nav.Item id="aboutRani" className="tab">
                <Nav.Link eventKey="aboutRani">Rani</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            xs={10}
            width="100%"
            className="d-flex align-items-center justify-content-center"
          >
            <Tab.Content>
              <Tab.Pane eventKey="aboutUs">
                <HomePage />
              </Tab.Pane>
              <Tab.Pane eventKey="aboutMatt">
                <p>About Matt</p>
              </Tab.Pane>
              <Tab.Pane eventKey="aboutRani">
                <p>About Rani</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}

export default AboutPage;
