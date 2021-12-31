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

Expected props:
name (string)
gradYear (number)
majors (array of strings)
minors (array of strings)
*/
const EducationSection = ({ name, gradYear, degrees, minors }) => {
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
              <span>{name}</span>
            </Col>
            <Col xs={4} style={{ textAlign: "right" }}>
              <span>{gradYear}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <small>
                {degrees.join(", ")}. Minors: {minors.join(", ")}
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

/* 
This component creates a profile that showcases technical and general 
'additional' skills. They are outputted as cards with the card size depending
upon the length of the skill with the longest name.

Expected props:
technicalSkills - Array of Objects with properties: 
  skill (string), progress (number)
languageSkills - Array of Objects with properties:
  language (string), notes (string)
additionalSkills - Array of strings
*/
const Skills = (props) => {
  let technicalSkills = props.technicalSkills;
  let languageSkills = props.languageSkills;
  let additionalSkills = props.additionalSkills;

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

  additionalSkills.forEach((skill) => {
    let skillNameLength = skill.length;
    longestSkillName =
      skillNameLength > longestSkillName ? skillNameLength : longestSkillName;
  });

  let cardWidth = `${longestSkillName * 0.6}rem`;
  let maxCardWidth = `${(longestSkillName + 1) * 0.6}rem`;

  return (
    <Row>
      <Col style={{ width: "100%" }}>
        <h4>Skills</h4>
        <CardGroup className="d-flex flex-wrap">
          <Row style={{ width: "100%" }}>
            <Col
              style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
              className="skill-card-col p-0"
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
                      <ProgressBar
                        now={progress}
                        variant={"progress-bar"}
                        animated
                      />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CardGroup>
        <br />
        <CardGroup
          className="d-flex flex-wrap"
          style={{ maxHeight: "fit-content" }}
        >
          <Row style={{ width: "100%" }}>
            <Col
              style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
              className="skill-card-col p-0"
            >
              <Card
                className="d-flex justify-content-center skill-card"
                style={{
                  color: "blue",
                  height: "100%",
                  textAlign: "center",
                  borderColor: "blue",
                }}
              >
                <span>Language Skills</span>
              </Card>
            </Col>
            {languageSkills.map(({ language, notes }) => {
              return (
                <Col
                  key={language}
                  style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
                  className="p-0 m-0 skill-card-col"
                >
                  <Card
                    className="skill-card"
                    style={{
                      backgroundColor: "blue",
                    }}
                  >
                    <Card.Body className="p-2">
                      <Card.Text className="py-0 my-1">
                        <span>{language}</span>
                        <small>{notes}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CardGroup>
        <br />
        <CardGroup
          className="d-flex flex-wrap"
          style={{ maxHeight: "fit-content" }}
        >
          <Row style={{ width: "100%" }}>
            <Col
              style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
              className="skill-card-col p-0"
            >
              <Card
                className="d-flex justify-content-center skill-card"
                style={{
                  color: "blue",
                  height: "100%",
                  textAlign: "center",
                  borderColor: "blue",
                }}
              >
                <span>Additional Skills</span>
              </Card>
            </Col>
            {additionalSkills.map((skill) => {
              return (
                <Col
                  key={skill}
                  style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
                  className="p-0 m-0 skill-card-col"
                >
                  <Card
                    className="skill-card"
                    style={{
                      backgroundColor: "blue",
                    }}
                  >
                    <Card.Body className="p-2">
                      <Card.Text className="py-0 my-1">
                        <span>{skill}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CardGroup>
      </Col>
    </Row>
  );
};

const Experiences = (props) => {
  const role = "Full-Stack Software Developer";
  const dates = "July 2020 - Present";
  const organization = "JPMorgan Chase";
  const location = "Columbus, OH";
  const bulletPoints = [
    `Developed full-stack applications aimed at identifying control breaks and 
    automating risk remediation at the firm's infrastructure level.`,
    `Built internal, client-facing portal in ReactJS that serves as a
    hub for the team's applications and services.`,
    `Utilized JFrog Artifactory to reorganize common back-end functionality
    across different applications into a common Python package. This led to 
    reduced code duplication and allowed team to maintain up-to-date, now 
    versioned internal tooling.`,
    `Led effort to transition team's workflow from waterfall to an
    agile-first, Scrum model.`,
    `Set up and helped maintain team Scrum board in Jira, SharePoint and 
    Confluence pages,`,
  ];

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h4>Experiences</h4>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between my-0">
          <Col xs={8}>
            <p className="my-0">
              <strong>{role}</strong>
            </p>
            <small>
              <strong>{organization}</strong>, {location}
            </small>
            <ul>
              {bulletPoints.map((bulletPoint) => (
                <li>{bulletPoint}</li>
              ))}
            </ul>
          </Col>
          <Col xs={4} style={{ textAlign: "right" }}>
            <span>{dates}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const Profile = (props) => {
  // Set up dummy data for each section
  const skills = {
    technicalSkills: [
      { skill: "Python", progress: 80 },
      { skill: "JavaScript (ES6)", progress: 60 },
      { skill: "ReactJS", progress: 50 },
      { skill: "HTML & CSS", progress: 70 },
      { skill: "Cloud Foundry", progress: 30 },
      { skill: "Tableau", progress: 30 },
      { skill: "SQL", progress: 30 },
      { skill: "Java", progress: 40 },
    ],
    languageSkills: [
      {
        language: "Arabic",
        notes: "Conversational in Levantine dialect. Basic literacy.",
      },
      {
        language: "German",
        notes: "B1 level. Basic conversation, intermediate literacy.",
      },
    ],
    additionalSkills: [
      "Scrum",
      "Teaching / tutoring",
      "Jira",
      "Confluence",
      "SharePoint",
    ],
  };

  const institution = {
    name: "Ohio State University",
    gradYear: 2020,
    degrees: ["B.S. in Applied Physics"],
    minors: ["Astronomy & Astrophysics", "German"],
  };

  /* 
  Put together profile by passing data into each section and combining it into 
  a resume-style profile page
  */
  return (
    <Container fluid className="profile py-2">
      <Row>
        <Col>
          <h2>{props.name}</h2>
        </Col>
      </Row>
      <hr />
      <EducationSection {...institution} />
      <br />
      <Skills {...skills} />
      <br />
      <Experiences />
    </Container>
  );
};

export default Profile;
