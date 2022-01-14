import React from "react";
import "../styles/App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Accordion,
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
              {degrees.join(", ")}.{" "}
              <span style={{ fontWeight: "600" }}>Minors:</span>{" "}
              {minors.join(", ")}
            </small>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

/* 
Component that creates a skill card section. This is used for the Skills 
section below to create each of the subsections for skill types.

Expected prop:
Object with the following properties:
  category (string)
  skills (Object[skills, notes])
  cardColor (string)
  cardWidth (string in format '[number]rem')
  maxCardWidth (string in format '[number]rem')
*/
const SkillCards = ({
  category,
  skills,
  cardColor,
  cardWidth,
  maxCardWidth,
}) => {
  return (
    <CardGroup className="d-flex flex-wrap">
      <Col
        style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
        className="skill-card-col p-0"
      >
        <Card
          className="d-flex justify-content-center skill-card"
          style={{
            color: cardColor,
            height: "100%",
            textAlign: "center",
            borderColor: cardColor,
          }}
        >
          <span>{category}</span>
        </Card>
      </Col>
      {skills.map((item) => {
        return (
          <Col
            key={item.skill}
            style={{ minWidth: cardWidth, maxWidth: maxCardWidth }}
            className="p-0 m-0 skill-card-col"
          >
            <Card
              className="skill-card"
              style={{
                backgroundColor: cardColor,
              }}
            >
              <Card.Body className="p-1">
                <Card.Text className="py-0 my-1">
                  <strong>{item.skill}</strong>
                </Card.Text>
                {category !== "Additional Skills" ? (
                  <Card.Text style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                    {item.notes}
                  </Card.Text>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </CardGroup>
  );
};

/* 
This component creates a profile that showcases technical, language, and 
'additional' skills. They are outputted as cards with the card size depending
upon the length of the skill with the longest name.

Expected props:
technicalSkills - Array of Objects with properties: 
  skill (string), notes (string)
languageSkills - Array of Objects with properties:
  skill (string), notes (string)
additionalSkills - Array of Objects with properties:
  skill (string)
*/
const SkillSection = (props) => {
  let technicalSkills = props.technicalSkills;
  let languageSkills = props.languageSkills;
  let additionalSkills = props.additionalSkills;

  /* 
  Order technical skills from highest to lowest proficiency level. If same 
  level, sort alphabetically.
  Reference: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ 
  */
  technicalSkills.sort((skillA, skillB) => {
    const tiers = {
      Basic: 1,
      Intermediate: 2,
      Advanced: 3,
      Expert: 4,
    };

    let itemA = Object.keys(tiers).includes(skillA.notes)
      ? tiers[skillA.notes]
      : 0;
    let itemB = Object.keys(tiers).includes(skillB.notes)
      ? tiers[skillB.notes]
      : 0;

    if (itemA === itemB) {
      return skillA.skill < skillB.skill ? -1 : 1;
    }

    return itemA > itemB ? -1 : 1;
  });

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

  let cardWidth = `${longestSkillName * 0.7}rem`;
  let maxCardWidth = `${(longestSkillName + 1) * 0.7}rem`;

  return (
    <Row>
      <Col style={{ width: "100%" }}>
        <SkillCards
          category="Technical Skills"
          skills={technicalSkills}
          cardColor="blue"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />

        <br />

        <SkillCards
          category="Language Skills"
          skills={languageSkills}
          cardColor="teal"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />

        <br />

        <SkillCards
          category="Additional Skills"
          skills={additionalSkills}
          cardColor="green"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />
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
          <Col xs={8}>
            <p className="my-0">
              <strong>{role}</strong>
            </p>
            <small>
              <strong>{organization}</strong>, {location}
            </small>
          </Col>
          <Col xs={4} style={{ textAlign: "right" }}>
            <span>{dates}</span>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between my-0">
          <Col>
            <ul className="py-1 px-2">
              {bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint.length + bulletPoint.substring(1, 10)}>
                  {bulletPoint}
                </li>
              ))}
            </ul>
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
      { skill: "Python", notes: "Advanced" },
      { skill: "JavaScript (ES6)", notes: "Intermediate" },
      { skill: "ReactJS", notes: "Intermediate" },
      { skill: "HTML & CSS", notes: "Intermediate" },
      { skill: "Cloud Foundry", notes: "Basic" },
      { skill: "Tableau", notes: "Basic" },
      { skill: "SQL", notes: "Basic" },
      { skill: "Java", notes: "Intermediate" },
    ],
    languageSkills: [
      {
        skill: "Arabic",
        notes: "Conversational in Levantine dialect. Basic literacy.",
      },
      {
        skill: "German",
        notes: "B1 level. Basic conversation, intermediate literacy.",
      },
    ],
    additionalSkills: [
      { skill: "Scrum", notes: "" },
      { skill: "Teaching / tutoring", notes: "" },
      { skill: "Jira", notes: "" },
      { skill: "Confluence", notes: "" },
      { skill: "SharePoint", notes: "" },
    ],
  };

  const institution = {
    name: "Ohio State University",
    gradYear: 2020,
    degrees: ["B.S. in Applied Physics"],
    minors: ["Astronomy & Astrophysics", "German"],
  };

  const sections = [
    { title: "Education", component: <EducationSection {...institution} /> },
    { title: "Skills", component: <SkillSection {...skills} /> },
    { title: "Experience", component: <Experiences /> },
  ];
  /* 
  Put together profile by passing data into each section and combining it into 
  a resume-style profile page
  */
  return (
    <Container fluid className="profile py-2 px-auto">
      <Row>
        <Col>
          <h2>{props.name}</h2>
        </Col>
      </Row>
      {sections.map(({ title, component }) => {
        return (
          <Row key={title}>
            <Col className="mx-0 px-0">
              <Accordion defaultActiveKey={title}>
                <Accordion.Item eventKey={title}>
                  <Accordion.Header>
                    <h4>{title}</h4>
                  </Accordion.Header>
                  <Accordion.Body>{component}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Profile;
