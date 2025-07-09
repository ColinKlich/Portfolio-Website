import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Colin Klich</span> from <span className="purple">Nashville, TN</span>.<br />
            I'm a driven developer and problem solver with a background in Computer Science and Finance from The University of Alabama.<br />
            <br />
            My experience includes building automation solutions, developing web applications, and creating data-driven dashboards. At Mercedes-Benz US Int'l, I focused on RPA, Python scripting, and PowerBI, always aiming to deliver efficient, scalable results.<br />
            <br />
            I thrive on learning new technologies, collaborating with others, and turning ideas into polished, impactful products. Outside of tech, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going Outdoors (Sailing, Hiking, Backpacking)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If there is no struggle, there is no progress"{" "}
          </p>
          <footer className="blockquote-footer">Frederick Douglass</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
