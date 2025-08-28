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
            I specialize in developing secure, automated solutions that protect and optimize critical systems while ensuring robust security practices are embedded at every level.<br />
            <br />
            My foundation in Computer Science and Finance from The University of Alabama, combined with hands-on experience at Mercedes-Benz US Int'l, has equipped me with a unique perspective on securing complex systems. I excel at implementing security-first architectures, building automated security frameworks, and developing efficient solutions that balance protection with performance.<br />
            <br />
            I'm particularly passionate about cybersecurity automation, secure software development, and creating tools that enhance system security while improving operational efficiency. Whether it's implementing zero-trust architectures, developing secure APIs, or building automated security testing frameworks, I focus on delivering solutions that are both secure and scalable.<br />
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
