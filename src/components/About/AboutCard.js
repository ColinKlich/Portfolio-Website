import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Colin Klich</span>, a security-focused software engineer from <span className="purple">Nashville, TN</span>.<br />
            My journey into the world of technology started at The University of Alabama, where I studied both Computer Science and Finance. This combination gave me a unique perspective on how critical systems are built and managed.
            <br />
            <br />
            I've always been fascinated by the challenge of securing complex systems, which led me to specialize in cybersecurity. I enjoy diving deep into security-first architectures, building automated security frameworks, and developing solutions that are not only secure but also efficient and scalable. I believe the best security is built-in, not bolted on.
            <br />
            <br />
            When I'm not securing systems or writing code, I enjoy:
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
            "Security is not a product, but a process"{" "}
          </p>
          <footer className="blockquote-footer">Bruce Schneier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
