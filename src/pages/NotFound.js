import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Image } from "react-bootstrap";
import SunbirdImg from "../images/Palestine_sunbird.jpg";
import "../styles/App.css";

const NotFound = () => {
  return (
    <div id="NotFound">
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
            <h1>404: Page Not Found</h1>
          </Card.Header>
          <Card.Body className="d-flex align-items-center">
            <Card.Text>
              Click here to return <Link to="/">home</Link>.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default NotFound;
