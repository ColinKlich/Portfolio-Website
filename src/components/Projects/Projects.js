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
              description="Real-time safety dashboard for manufacturing, built with Node.js and Axios. Integrates live data from Smartsheet APIs to visualize plant safety metrics and drive actionable insights for operations teams."
              ghLink="https://github.com/ColinKlich/Atrium-Safety-Board"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excelBot}
              isBlog={false}
              title="Excel Column Comparator Bot"
              description="Automates data comparison across Excel files using a custom algorithm. Delivers similarity scoring and detailed reporting—streamlining data validation and reconciliation for business workflows."
              ghLink="https://github.com/ColinKlich/Excel-Column-Comparator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours"
              description="Full-stack tour booking platform with secure REST API, built on Node.js, Express, and MongoDB. Features user authentication, booking management, and modern UI for a seamless customer experience."
              ghLink="https://github.com/ColinKlich/Natours"
              demoLink="https://www.natours.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic/Weather Dashboard"
              description="Interactive dashboard providing real-time traffic and weather analytics for Alabama commuters. Built with React and public APIs to support informed travel decisions."
              ghLink="https://github.com/ColinKlich/Traffic-Weather-Dashboard"
              demoLink="https://colinklich.github.io/Traffic-Weather-Dashboard/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driving}
              isBlog={false}
              title="Self Driving Car JS"
              description="Browser-based self-driving car simulation using vanilla JavaScript. Demonstrates pathfinding, sensor logic, and real-time AI—all in an interactive, visual format."
              ghLink="https://github.com/ColinKlich/Self-Driving-Car-JS/"
              demoLink="https://colinklich.github.io/Self-Driving-Car-JS/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Full Stack Blockchain and Cryptocurrency"
              description="End-to-end blockchain wallet app: React frontend and Node/Express backend. Implements secure transactions, blockchain logic, and a user-friendly interface for hands-on fintech experience."
              ghLink="https://github.com/ColinKlich/Blockchain"
              demoLink="https://blockchain-topaz.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Webscraper"
              description="Suite of webscraping tools using Scrapy, Selenium, and BeautifulSoup. Automates data extraction for research, analytics, and business intelligence."
              ghLink="https://github.com/ColinKlich/Webscraper"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llama}
              isBlog={false}
              title="Scrappy LLM"
              description="Large Language Model (LLM) built from scratch, inspired by Llama 2. Showcases deep learning, model architecture, and hands-on AI engineering."
              ghLink="https://github.com/ColinKlich/scrappyLLM"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nvda}
              isBlog={false}
              title="ML Training"
              description="Hands-on machine learning projects: regression models and neural networks for real-world problem solving. Emphasizes practical ML skills and experimentation."
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
