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
            I am passionate about developing technical solutions that automate and optimize data processes, helping organizations work smarter and more efficiently.<br />
            <br />
            My background in Computer Science and Finance from The University of Alabama, along with hands-on experience at Mercedes-Benz US Int'l, has given me a strong foundation in automation, web development, and data-driven decision making. I enjoy working on projects that strengthen system reliability, streamline operations, and safeguard critical data assets.<br />
            <br />
            I thrive in collaborative environments and am always eager to take on new challenges that drive innovation and deliver real value. Outside of tech, I enjoy:
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
