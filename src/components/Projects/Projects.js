import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import natours from "../../Assets/Projects/natours.png";
import traffic from "../../Assets/Projects/traffic-dashboard.png";
import safety from "../../Assets/Projects/safety-dashboard.png";
import driving from "../../Assets/Projects/self-drive.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safety}
              isBlog={false}
              title="Safety Stoplight"
              description="This project uses NodeJS, Javascript, Axios, and Pug to display some safety statistics about the plant. It updates in real time using an API connection to Smartsheet connection."
              ghLink="https://github.com/ColinKlich/Atrium-Safety-Board"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours"
              description="A tour booking website built using NodeJS, MongoDB, Express, Mongoose, and Postman. Includes a REST API."
              ghLink="https://github.com/ColinKlich/Natours"
              demoLink="https://www.natours.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic/Weather Dashboard"
              description="Displays realtime traffic statistics between Tuscaloosa and Birmingham. Displays realtime weather centered around Vance,AL."
              ghLink="https://github.com/ColinKlich/Traffic-Weather-Dashboard"
              demoLink="https://colinklich.github.io/Traffic-Weather-Dashboard/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driving}
              isBlog={false}
              title="Self Driving Car JS"
              description="A self-drving car simulation built using only vanilla js."
              ghLink="https://github.com/ColinKlich/Self-Driving-Car-JS/"
              demoLink="https://colinklich.github.io/Self-Driving-Car-JS/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
