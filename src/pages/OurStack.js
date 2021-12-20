import React from "react";
import "../styles/App.css";
import { Container, Row, Col, Card, Accordion, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHtml5,
  faCss3,
  faBootstrap,
  faGithub,
  faReact,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";

const OurStack = (props) => {
  const stack = [
    { icon: faAws, tool: "AWS Amplify", purpose: "Back-end, CI/CD" },
    { icon: faReact, tool: "React (v16.8+)", purpose: "User Interface" },
    { icon: faHtml5, tool: "HTML5", purpose: "Front-end structure" },
    { icon: faCss3, tool: "CSS3", purpose: "Front-end styling" },
    { icon: faJsSquare, tool: "JavaScript (ES6)", purpose: "User Interface" },
    { icon: faBootstrap, tool: "Bootstrap", purpose: "UI components" },
    {
      icon: faGithub,
      tool: "Github",
      purpose: "Version control and code-sharing",
    },
  ];

  return (
    <div id="OurStack">
      <Table style={{ textAlign: "center" }}>
        <thead>
          <th></th>
          <th>Tool</th>
          <th>Purpose</th>
        </thead>
        <tbody>
          {stack.map(({ icon, tool, purpose }) => {
            return (
              <tr>
                <td>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </td>
                <td>{tool}</td>
                <td>{purpose}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OurStack;
