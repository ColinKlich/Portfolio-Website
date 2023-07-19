import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Colin Klich </span>
            from <span className="purple"> Nashville, TN.</span>
            <br /> I am a Senior at The University of Alabama studying Computer Science and Finance.
            <br />
            Additionally, I am currently employed as a software developer and IT project manager at Mercedes-Benz US Int'l.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
