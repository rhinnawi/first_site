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

  /* 
  Order technical skills from most to least progress 
  Reference: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ 
  */
  technicalSkills.sort((skillA, skillB) =>
    skillA.progress > skillB.progress ? -1 : 1
  );

  /* 
  Get card width and max card width based off length of string for the skill 
  with the longest name 
  */
  let longestSkillName = 0;
  technicalSkills.forEach((skill) => {
    let skillNameLength = skill["skill"].length;
    longestSkillName =
      skillNameLength > longestSkillName ? skillNameLength : longestSkillName;
  });
  let cardWidth = `${longestSkillName}rem`;
  let maxCardWidth = `${longestSkillName + 2}rem`;

  return (
    <Row>
      <Col style={{ width: "100%" }}>
        <h4>Skills</h4>
        <CardGroup className="d-flex flex-wrap">
          <Col
            style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
            className="skill-card-col"
          >
            <Card
              className="d-flex justify-content-center skill-card"
              style={{
                color: "red",
                height: "100%",
                textAlign: "center",
                borderColor: "red",
              }}
            >
              <span>Technical Skills</span>
            </Card>
          </Col>
          {technicalSkills.map(({ skill, progress }) => {
            return (
              <Col
                key={skill}
                style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
                className="p-0 m-0 skill-card-col"
              >
                <Card
                  className="skill-card"
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  <Card.Body className="p-2">
                    <Card.Text className="py-0 my-1">
                      <span>{skill}</span>
                    </Card.Text>
                    <ProgressBar now={progress} variant={"progress-bar"} />
                  </Card.Body>
                </Card>
              </Col>
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
                key={skill}
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
      </Col>
    </Row>
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
      <Skills />
    </Container>
  );
};

export default Profile;
