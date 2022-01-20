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
import raniProfile from "../data/raniProfile.json";

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
      <Row style={{ width: "100%" }}>
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
              fontSize: "1.25rem",
            }}
          >
            <span>{category}</span>
          </Card>
        </Col>
        <Col>
          <Row>
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
                      <Card.Text
                        className="py-0 my-1"
                        style={{ fontWeight: "600", fontSize: "1.15rem" }}
                      >
                        {item.skill}
                      </Card.Text>
                      {category !== "Additional Skills" ? (
                        <Card.Text
                          style={{ fontSize: "0.9rem", fontWeight: "500" }}
                        >
                          {item.notes}
                        </Card.Text>
                      ) : null}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
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

  let cardWidth = `${longestSkillName * 0.75}rem`;
  let maxCardWidth = `${(longestSkillName + 0.15) * 0.75}rem`;

  return (
    <Row>
      <Col style={{ width: "100%" }}>
        <SkillCards
          category="Technical"
          skills={technicalSkills}
          cardColor="blue"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />

        <br />

        <SkillCards
          category="Language"
          skills={languageSkills}
          cardColor="teal"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />

        <br />

        <SkillCards
          category="Additional"
          skills={additionalSkills}
          cardColor="green"
          cardWidth={cardWidth}
          maxCardWidth={maxCardWidth}
        />
      </Col>
    </Row>
  );
};

/* 
Takes in an object with the properties described below and generates a section 
for a single experience.

Expected properties:
  role - String
  dates - String 
  organization - String
  location - String
  bulletPoints - Array of Strings
*/
const Experience = ({ role, dates, organization, location, bulletPoints }) => {
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
            <ul className="py-1 px-0 mx-3">
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

/* 
Simple component for taking in array of experiences as a prop and outputting
them into a coherent skills section.

Expected props:
 experiences - array of Objects with properties detailed for Experience
 component above.
*/
const ExperienceSection = ({ experiences }) => {
  return (
    <Row>
      <Col>
        {experiences.map((exp) => (
          <Experience key={exp.role} {...exp} />
        ))}
      </Col>
    </Row>
  );
};

const Profile = (props) => {
  // Set up dummy data for each section
  let skills = raniProfile.skills;
  let experiences = raniProfile.experiences;
  let institution = raniProfile.education.institution;

  const sections = [
    { title: "Education", component: <EducationSection {...institution} /> },
    { title: "Skills", component: <SkillSection {...skills} /> },
    {
      title: "Experience",
      component: <ExperienceSection experiences={experiences} />,
    },
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
