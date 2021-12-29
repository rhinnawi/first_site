import React from "react";
import "../styles/App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  ProgressBar,
} from "react-bootstrap";

/*
Profile section that outputs formatted educational information. Itms are split
across two rows and stylised to be responsive for multiple screen widths.
*/
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

const Skills = (props) => {
  const technicalSkills = [
    { skill: "Python", progress: 80 },
    { skill: "JavaScript (ES6)", progress: 60 },
    { skill: "ReactJS", progress: 50 },
    { skill: "HTML & CSS", progress: 70 },
    { skill: "Cloud Foundry", progress: 30 },
    { skill: "Tableau", progress: 30 },
  ];

  const additionalSkills = [
    "Scrum",
    "Teaching / tutoring",
    "Jira",
    "Confluence",
    "SharePoint",
  ];

  return (
    <div style={{ width: "100%" }}>
      <CardGroup className="d-flex flex-wrap">
        <Card
          style={{
            padding: "1rem",
            backgroundColor: "white",
            color: "red",
            minWidth: "fit-content",
            maxWidth: "max-content",
          }}
          className="d-flex justify-content-center"
        >
          <span>Technical Skills</span>
        </Card>
        {technicalSkills.map(({ skill, progress }) => {
          return (
            <Card
              // style={{
              //   fontSize: "0.9em",
              //   padding: "1rem",
              //   backgroundColor: "red",
              //   color: "white",
              //   border: "solid 1px white",
              //   minWidth: "fit-content",
              //   maxWidth: "10rem",
              //   maxHeight: "8rem",
              // }}
              className="technical-skills"
            >
              <p>{skill}</p>
              <ProgressBar now={progress} />
            </Card>
          );
        })}
      </CardGroup>
      <br />
      <CardGroup
        className="d-flex flex-wrap"
        style={{ maxHeight: "fit-content" }}
      >
        <Card
          style={{
            padding: "1rem",
            backgroundColor: "white",
            color: "blue",
            minWidth: "fit-content",
          }}
          className="d-flex justify-content-center"
        >
          Additional Skills
        </Card>
        {additionalSkills.map((skill) => {
          return (
            <Card
              style={{
                fontSize: "0.9em",
                padding: "1rem",
                backgroundColor: "blue",
                color: "white",
                border: "solid 1px white",
              }}
            >
              {skill}
            </Card>
          );
        })}
      </CardGroup>
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
          {/* <Card>
            <Row className="d-flex justify-items-end">
              <Col>
                <Card style={{ color: "red" }}>Technical</Card>
              </Col>
              <Col className="d-flex align-items-center">
                <Card
                  className="p-2"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Skill 2
                </Card>
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
          </Card> */}
          <Skills />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
