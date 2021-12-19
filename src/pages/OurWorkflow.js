import React from "react";
import "../styles/App.css";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

const OurWorkflow = (props) => {
  const { Item, Header, Body } = Accordion;

  return (
    <div id="OurWorkflow">
      <Accordion>
        <Item eventKey="0">
          <Header>Our Skills</Header>
          <Body>
            Python 3, JavaScript ES6, SQL, ReactJS, HTML & CSS, VUE.js, C++,
            Java, Matlab
          </Body>
        </Item>
        <Item>
          <Header>Our Stack</Header>
          <Body>AWS Amplify, JavaScript ES6, ReactJS, HTML & CSS</Body>
        </Item>
      </Accordion>
    </div>
  );
};

export default OurWorkflow;
