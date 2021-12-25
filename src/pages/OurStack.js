import React from "react";
import "../styles/App.css";
import { Table } from "react-bootstrap";
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

  const futureToolsBlurb = `
    As we evolve this site and other projects, we will naturally need to 
    consider tools that meet our future needs. Although we are not prematurely
    jumping into newer tooling at the moment, we have our eyes on some that has
    great potential for us down the line. 
  `;

  const futureTools = [
    { tool: "TypeScript", desc: "Stricter typing in JavaScript" },
    { tool: "SASS", desc: "Enhanced styling functionality" },
    { tool: "Node.js", desc: "Backend functions, REST API" },
    {
      tool: "AWS S3, Lambda, API Gateway",
      desc: "Host API, store back-end functions, store images",
    },
  ];

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
              <tr key={tool}>
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

      <br />
      <br />

      <h3>Future tooling considerations</h3>
      <p>
        <small>{futureToolsBlurb}</small>
      </p>
      <ul>
        {futureTools.map(({ tool, desc }) => (
          <li>
            <strong>{tool}</strong>: {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurStack;
