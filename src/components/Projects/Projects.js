import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import natours from "../../Assets/Projects/natours.png";
import traffic from "../../Assets/Projects/traffic-dashboard.png";
import petfindr from "../../Assets/Projects/petfindr.png";
import driving from "../../Assets/Projects/self-drive.png";
import blockchain from "../../Assets/Projects/blockchain.png";
import scraper from "../../Assets/Projects/scraper.png";
import excelBot from "../../Assets/Projects/excel_bot.png"
import llama from "../../Assets/Projects/llama.png"
import nvda from "../../Assets/Projects/nvda.png"
import homelab from "../../Assets/Projects/homelab.png"
import unsloth from "../../Assets/Projects/unsloth.png"
import docscribe from "../../Assets/Projects/docscribe.png"
import aegis from "../../Assets/Projects/aegis.png"

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
        <div className="projects-grid">
            <ProjectCard
              imgPath={docscribe}
              isBlog={false}
              title="DocScribe"
              description="An Obsidian plugin that lets you upload a PDF or PowerPoint (PPTX) file and automatically converts it into clear, organized notes using a Large Language Model (LLM). Built with TypeScript and various LLM APIs."
              ghLink="https://github.com/ColinKlich/DocScribe"
              demoLink=""
            />
            <ProjectCard
              imgPath={aegis}
              isBlog={false}
              title="Aegis"
              description="Aegis is a C++ security scanner designed to detect sophisticated threats on Windows systems by leveraging multiple detection techniques through Windows APIs."
              ghLink="https://github.com/ColinKlich/Aegis"
              demoLink=""
            />            
            <ProjectCard
              imgPath={homelab}
              isBlog={false}
              title="Homelab"
              description="this is my playground for all things AI, servers, networking, and automation."
              ghLink="https://github.com/ColinKlich/homelab"
              demoLink=""
            />
            <ProjectCard
              imgPath={petfindr}
              isBlog={false}
              title="Petfindr"
              description="This is a full stack web application designed to help users find their missing pets. It is built with Next.js, Clerk for authentication, Convex for database, Cloudinary for image storage, and currently hosted on Vercel. This is a side project of mine that could grow into a real business. Under development"
              ghLink="https://github.com/ColinKlich/Petfindr"
              demoLink="https://petfindr.vercel.app/"
            />
            <ProjectCard
              imgPath={unsloth}
              isBlog={false}
              title="Unsloth LLM Finetuning"
              description="A LLM finetuned on real estate data to demonstrate unsloth's capabilities. Built using Unsloth and Ollama"
              ghLink="https://github.com/ColinKlich/Unsloth-llm"
              demoLink=""
            />
            <ProjectCard
              imgPath={excelBot}
              isBlog={false}
              title="Excel Column Comparator Bot"
              description="Automates data comparison across Excel files using a custom algorithm. Delivers similarity scoring and detailed reporting—streamlining data validation and reconciliation for business workflows."
              ghLink="https://github.com/ColinKlich/Excel-Column-Comparator"
              demoLink=""
            />

            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours"
              description="Full-stack tour booking platform with secure REST API, built on Node.js, Express, and MongoDB. Features user authentication, booking management, and modern UI for a seamless customer experience."
              ghLink="https://github.com/ColinKlich/Natours"
              demoLink="https://www.natours.dev/"
            />

            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic/Weather Dashboard"
              description="Interactive dashboard providing real-time traffic and weather analytics for Alabama commuters. Built with React and public APIs to support informed travel decisions."
              ghLink="https://github.com/ColinKlich/Traffic-Weather-Dashboard"
              demoLink="https://colinklich.github.io/Traffic-Weather-Dashboard/"              
            />
            <ProjectCard
              imgPath={driving}
              isBlog={false}
              title="Self Driving Car JS"
              description="Browser-based self-driving car simulation using vanilla JavaScript. Demonstrates pathfinding, sensor logic, and real-time AI—all in an interactive, visual format."
              ghLink="https://github.com/ColinKlich/Self-Driving-Car-JS/"
              demoLink="https://colinklich.github.io/Self-Driving-Car-JS/"              
            />
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Full Stack Blockchain and Cryptocurrency"
              description="End-to-end blockchain wallet app: React frontend and Node/Express backend. Implements secure transactions, blockchain logic, and a user-friendly interface for hands-on fintech experience."
              ghLink="https://github.com/ColinKlich/Blockchain"
              demoLink="https://blockchain-topaz.vercel.app/"              
            />
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Webscraper"
              description="Suite of webscraping tools using Scrapy, Selenium, and BeautifulSoup. Automates data extraction for research, analytics, and business intelligence."
              ghLink="https://github.com/ColinKlich/Webscraper"
              demoLink=""              
            />
            <ProjectCard
              imgPath={llama}
              isBlog={false}
              title="Scrappy LLM"
              description="Large Language Model (LLM) built from scratch, inspired by Llama 2. Showcases deep learning, model architecture, and hands-on AI engineering."
              ghLink="https://github.com/ColinKlich/scrappyLLM"
              demoLink=""              
            />
            <ProjectCard
              imgPath={nvda}
              isBlog={false}
              title="ML Training"
              description="Hands-on machine learning projects: regression models and neural networks for real-world problem solving. Emphasizes practical ML skills and experimentation."
              ghLink="https://github.com/ColinKlich/ML-Training"
              demoLink=""              
            />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
