import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import natours from "../../Assets/Projects/natours.png";
import traffic from "../../Assets/Projects/traffic-dashboard.png";
import safety from "../../Assets/Projects/safety-dashboard.png";
import driving from "../../Assets/Projects/self-drive.png";
import blockchain from "../../Assets/Projects/blockchain.png";
import scraper from "../../Assets/Projects/scraper.png";
import excelBot from "../../Assets/Projects/excel_bot.png"
import llama from "../../Assets/Projects/llama.png"
import nvda from "../../Assets/Projects/nvda.png"

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
              imgPath={excelBot}
              isBlog={false}
              title="Excel Column Comparator Bot"
              description="This project uses a custom written algorithm to compare data between different excel sheets/columns and return similar items along with a similarlity index and any selected columns from the previous two files."
              ghLink="https://github.com/ColinKlich/Excel-Column-Comparator"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Full Stack Blockchain and Cryptocurrency"
              description="A React cryptocurrency wallet frontend, built on a Node/Express Blockchain API backend."
              ghLink="https://github.com/ColinKlich/Blockchain"
              demoLink="https://blockchain-topaz.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Webscraper"
              description="Multiple webscrapers built using Scrapy, Selenium, and Beautiful Soup"
              ghLink="https://github.com/ColinKlich/Webscraper"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llama}
              isBlog={false}
              title="Scrappy LLM"
              description="A Large Language Model built from scratch (without pretrained weights) based on the Llama 2 architecture"
              ghLink="https://github.com/ColinKlich/scrappyLLM"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nvda}
              isBlog={false}
              title="ML Training"
              description="Practice using Regression Models and simple Neural Networks to solve ML problems."
              ghLink="https://github.com/ColinKlich/ML-Training"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
