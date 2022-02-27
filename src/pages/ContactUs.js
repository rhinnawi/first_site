import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const { Text, Group, Label, Control } = Form;

const ContactCard = ({ name, phoneNumber, email }) => {
  return (
    <Card>
      <Card.Body className="p-2">
        <Row>
          <Col>
            <Card.Title>{name}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="d-flex justify-content-between">
              <Col md="auto" className="flex-xs-shrink-1">
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong>Cell:</strong> {phoneNumber}
                </Card.Text>
              </Col>
              <Col md="auto">
                <Card.Text>
                  <strong>E-mail:</strong> {email}
                </Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>Social Media links go here</Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const ContactUs = (props) => {
  const contactInfo = [
    { name: "Rani", phoneNumber: "123-456-7890", email: "rani@sunbirdweb.com" },
    { name: "Matt", phoneNumber: "987-654-3210", email: "matt@sunbirdweb.com" },
  ];

  const required = () => <span style={{ color: "red " }}>*</span>;

  return (
    <Container>
      <Row>
        <Col>
          <h3>Contact Us</h3>
          <p>
            We're excited to have you reach out! Please find our contact info
            below. You may also use the form at the bottom of the page to
            directly email us from here.
          </p>
        </Col>
      </Row>
      <Row>
        {contactInfo.map((person) => {
          return (
            <Col key={person.name}>
              <ContactCard {...person} />
            </Col>
          );
        })}
      </Row>
      <br />
      <Row>
        <Col>
          <Form>
            <Group>
              <Label>Name</Label>
              <Control type="text" placeholder="Luke Skywalker" />
            </Group>
            <Group>
              <Label>E-Mail Address{required()}</Label>
              <Control type="email" placeholder="name@example.com" />
              <Text>This will allow us to respond to you.</Text>
            </Group>
            <Group>
              <Label>Message{required()}</Label>
              <Control as="textarea" placeholder="Your message goes here." />
            </Group>
            {/* TODO: Set up Button be disabled until all fields are filled in */}
            <Button type="submit" onClick={console.log("Submitted.")}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
