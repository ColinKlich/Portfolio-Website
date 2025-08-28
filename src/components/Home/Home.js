import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontWeight: 700, letterSpacing: 1, color: "#fff" }} className="heading">
                Welcome! <span className="wave" role="img" aria-labelledby="wave" style={{ filter: "drop-shadow(0 0 6px #00c2d6)" }}>👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: "2.5em", fontWeight: 800, color: "#00c2d6", marginBottom: 0, textShadow: "0 2px 16px #232946, 0 0 8px #00c2d6" }}>
                I'm <strong className="main-name" style={{ color: "#7f5af0", textShadow: "0 2px 16px #232946, 0 0 8px #7f5af0" }}>Colin Klich</strong>
              </h1>
              <p style={{ fontSize: "1.25em", color: "#f5f6fa", marginTop: 10, marginBottom: 0, fontWeight: 500, maxWidth: 520, textShadow: "0 1px 8px #181c2b" }}>
                <span style={{ color: "#00c2d6", fontWeight: 700 }}>Security Engineer</span> <span style={{ color: "#7f5af0", fontWeight: 700 }}>| Automation Expert</span> <span style={{ color: "#2cb67d", fontWeight: 700 }}>| Solutions Architect</span>
              </p>
              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
