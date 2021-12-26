import React, { useState } from "react";
import { Nav, Tab, Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import HomePage from "./HomePage";

const ACTIVE_TAB_CLASSES = "tab tab-selected";
const DEFAULT_TAB_CLASSES = "tab";

const AboutPageNav = (props) => {
  const tabs = [
    { id: "aboutUs", title: "About Sunbird Web" },
    { id: "aboutMatt", title: "About Matt" },
    { id: "aboutRani", title: "About Rani" },
  ];

  return (
    <Nav
      fill
      className="flex-column"
      style={{ height: "100%" }}
      id="aboutPageNav"
    >
      {tabs.map(({ id, title }) => {
        return (
          <Nav.Item key={id} id={id} className={props.tabClasses[id]}>
            <Nav.Link eventKey={id}>{title}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

function AboutPage(props) {
  /* 
  Set up background colors per side tab. Need to store which tab is currently
  active as well as the background colors per tab. The activeTab should always
  correlate with the setTabBackgrounds property that is different from the rest
  */
  const [activeTab, setActiveTab] = useState("aboutUs");
  const [tabClasses, setTabClasses] = useState({
    aboutUs: ACTIVE_TAB_CLASSES,
    aboutMatt: DEFAULT_TAB_CLASSES,
    aboutRani: DEFAULT_TAB_CLASSES,
  });

  // Function for setting up new tab backgrounds
  const getNewTabClasses = (oldTab, newTab) => {
    let newClasses = { ...tabClasses };
    newClasses[oldTab] = DEFAULT_TAB_CLASSES;
    newClasses[newTab] = ACTIVE_TAB_CLASSES;

    return newClasses;
  };

  /*
  When a *new* tab is selected, change its background to be transparent. 
  Revert previous tab's background to default color.
  */
  const handleTabColor = (eventKey) => {
    if (eventKey === activeTab) return;

    setTabClasses(getNewTabClasses(activeTab, eventKey));
    setActiveTab(eventKey);
  };

  return (
    <Tab.Container
      defaultActiveKey="aboutUs"
      onSelect={(eventKey, e) => handleTabColor(eventKey)}
    >
      <Container fluid id="AboutPage">
        <Row className="px-0 py-2 d-flex justify-content-center">
          <Col sm={1} className="py-2">
            <AboutPageNav tabClasses={tabClasses} />
          </Col>
          <Col
            sm={11}
            width="100%"
            className="d-flex align-items-center justify-content-center px-0 py-2"
          >
            <Tab.Content className="d-flex justify-content-center">
              <Tab.Pane eventKey="aboutUs">
                <HomePage />
              </Tab.Pane>
              <Tab.Pane eventKey="aboutMatt">
                <div>
                  <p>About Matt</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="aboutRani">
                <div>
                  <p>About Rani</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}

export default AboutPage;
