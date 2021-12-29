import React from "react";
import "../styles/App.css";
import { Container, Row, Col, Card, CardGroup, Image } from "react-bootstrap";
import SunbirdImg from "../images/Palestine_sunbird.jpg";

function HomePage(props) {
  const aboutSunbirdWeb = `
        We are pleased to have you here! Sunbird Web is a collaboration between
        Matt Foster and Rani Hinnawi focused on serving family and friends by
        building websites for their small businesses. Feel free to explore the
        other links on this page to learn about us, the skills we have to
        offer, interests, experiences, and more!
    `;

  const aboutMatt = `
        Matt is an electrical engineer at TK Elevators where his main work focuses
        on PC boards. He graduated from Ohio State University with a BS in Engineering
        Physics and minor in Spanish, a language he has grown conversational in. 
        As a student he partook in research, a competition in China, and completed
        project-based coursework in the field. These days, when he's not working, 
        you can find him in a climbing gym, playing piano, hiking in the great outdoors, 
        exploring new restaurants and local breweries, or simply enjoying downtime with 
        his cat, Dot!
  `;

  const aboutRani = `
        A self-described jack of all trades, Rani naturally found himself working as a 
        full-stack developer. He currently works at JPMorgan Chase after having 
        graduated from Ohio State University, where he earned a BS in Physics and
        minors in Astrophysics and German. At OSU, he did computational astronomy
        research, studied abroad in Germany, and worked as an instructional and
        teaching assistant in astronomy and Python courses and labs. Beyond 
        coding, Rani enjoys practising his language skills in Arabic and German, 
        travelling, cooking, and raising plants. 
  `;

  return (
    <div id="HomePage">
      <Container fluid>
        <Row>
          <Col className="px-0">
            <CardGroup>
              <Card>
                <Card.Img
                  as={Image}
                  src={SunbirdImg}
                  alt="Sunbird image"
                  fluid={true}
                />
                <Card.Body className="d-flex align-items-center justify-content-center p-0 m-0">
                  <Card.Text className="caption align-self-center">
                    <small>Image Source: Wikipedia</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="aboutSunbirdWeb">
                <Card.Header>
                  <h1>Welcome to Sunbird Web</h1>
                </Card.Header>
                <Card.Body className="d-flex align-items-center">
                  <Card.Text>{aboutSunbirdWeb}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>

            <br />

            <Row>
              <Col className="px-0 mx-0">
                <Card className="description-card">
                  <Card.Title>
                    <strong>About Rani</strong>
                  </Card.Title>
                  <hr style={{ padding: 0, margin: 0 }} />
                  <Card.Body>
                    <Card.Text>{aboutRani}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="description-card">
                  <Card.Title>
                    <strong>About Matt</strong>
                  </Card.Title>
                  <hr style={{ padding: 0, margin: 0 }} />
                  <Card.Body>
                    <Card.Text>{aboutMatt}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
