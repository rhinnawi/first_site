import React from 'react';
import './HomePage.css';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import SunbirdImg from '../images/Palestine_sunbird.jpg';

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
                        <CardGroup>
                            <Card>
                                <Card.Img 
                                as={Image} 
                                src={SunbirdImg}
                                alt="Sunbird image" 
                                fluid={true}
                                />    
                            </Card>
                            <Card id="aboutSunbirdWeb">
                            <Card.Header>
                                <h1>Welcome to Sunbird Web</h1>
                            </Card.Header>
                            <Card.Body className="d-flex align-items-center">
                                <Card.Text>
                                    {aboutSunbirdWeb}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                        
                        <br/>

                        <CardGroup>
                            <Card>
                                <Card.Title>Rani</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        Desription here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Title>Matt</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        Desription here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;