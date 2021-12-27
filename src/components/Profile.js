import React from "react";
import "../styles/App.css";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

const EducationSection = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <h4>Education</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="d-flex justify-content-between my-0">
            <Col xs={8}>
              <span>Ohio State University</span>
            </Col>
            <Col xs={4} style={{ textAlign: "right" }}>
              <span>2020</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="caption">
                Applied Physics. Minors: Astronomy & Astrophysics, German
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const Profile = (props) => {
  return (
    <Container fluid className="profile py-2">
      <Row>
        <Col>
          <h2>{props.name}</h2>
        </Col>
      </Row>
      <hr />
      <EducationSection />
      <br />
      <Row>
        <Col>
          <h4>Skills</h4>
          <Card>
            <Row className="d-flex justify-items-end">
              <Col>
                <Card>Skill 1Skill 1Skill 1Skill 1Skill 1Skill 1Skill 1</Card>
              </Col>
              <Col>
                <Card>Skill 2</Card>
              </Col>
              <Col>
                <Card>Skill 2</Card>
              </Col>
              <Col>
                <Card>Skill 2</Card>
              </Col>
              <Col>
                <Card>Skill 2</Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
