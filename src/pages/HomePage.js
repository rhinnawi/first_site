import React from 'react';
import './HomePage.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HomePage(props) {

    const aboutSunbirdWeb = `
        We are pleased to have you here! Sunbird Web is a collaboration between
        Matt Foster and Rani Hinnawi focused on serving family and friends by
        building websites for their small businesses. Feel free to explore the
        other links on this page to learn about us, the skills we have to
        offer, interests, experiences, and more!
    `;

    return(
        <div className="HomePage">
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Sunbird Web</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <Card id="aboutSunbirdWeb">
                            <Card.Body>
                                <Card.Text>
                                    {aboutSunbirdWeb}
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;