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
    { icon: faHtml5, tool: "HTML", purpose: "Front-end structure" },
    { icon: faCss3, tool: "CSS", purpose: "Front-end styling" },
    { icon: faJsSquare, tool: "JavaScript (ES6)", purpose: "User Interface" },
    { icon: faBootstrap, tool: "Bootstrap", purpose: "UI components" },
    {
      icon: faGithub,
      tool: "Github",
      purpose: "Version control and code-sharing",
    },
  ];

  const description = `
    Sunbird Web is leveraging modern tools for a modern workflow. We actively 
    strive to enhance our tech stack, whether by advancing how we use our 
    current toolset or by implementing new technologies along the way. In 
    order to keep our applications up-to-date, reduce risk, enhance site 
    performance, and reduce friction in our workflow, we use the latest stable 
    versions of the tools listed below.
  `;

  return (
    <div id="OurStack">
      <h2>Our Stack</h2>
      <p>{description}</p>
      <br />
      <Table style={{ textAlign: "center", verticalAlign: "middle" }}>
        <thead>
          <th width="35%"></th>
          <th>Tool</th>
          <th>Purpose</th>
        </thead>
        <tbody>
          {stack.map(({ icon, tool, purpose }) => {
            return (
              <tr>
                <td>
                  <FontAwesomeIcon icon={icon} size="4x" />
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
