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
    { tool: "TypeScript", description: "Stricter typing in JavaScript" },
    { tool: "SASS", description: "Enhanced styling functionality" },
    { tool: "Node.js", description: "Backend functions, REST API" },
    {
      tool: "AWS S3, Lambda, API Gateway",
      description: "Host API, store back-end functions, store images",
    },
  ];

  return (
    <div id="OurStack">
      <section className="py-3 my-2">
        <h2>Our Stack</h2>
        <p>{description}</p>
      </section>

      <br />

      <Table style={{ textAlign: "center", verticalAlign: "middle" }}>
        <thead>
          <tr>
            <th width="35%"></th>
            <th>Tool</th>
            <th>Purpose</th>
          </tr>
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

      <section className="py-3 my-3">
        <h3>Future tooling considerations</h3>
        <p>{futureToolsBlurb}</p>
        <ul>
          {futureTools.map(({ tool, description }) => (
            <li key={tool}>
              <strong>{tool}</strong>: {description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OurStack;
