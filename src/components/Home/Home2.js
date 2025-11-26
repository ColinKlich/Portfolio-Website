import React from "react";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h1 className="section-title">
          LET ME <span className="highlight">INTRODUCE</span> MYSELF
        </h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a software engineer who specializes in building secure and efficient systems through automation.
              <br />
              <br />
              I have a passion for cybersecurity and a knack for solving complex problems. I'm adept at working across the stack, from infrastructure to applications, and I'm always looking for new challenges to tackle.
            </p>
          </div>
          <div className="hero-image">
            <img src={myImg} className="image-placeholder" alt="Avatar of developer" />
          </div>
        </div>
        <div className="home-about-social">
          <h2>FIND ME ON</h2>
          <div className="social-links">
            <a href="https://github.com/colinklich" target="_blank" rel="noreferrer" className="home-social-icons">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="home-social-icons">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.linkedin.com/in/colin-klich/" target="_blank" rel="noreferrer" className="home-social-icons">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home-social-icons">
              <AiFillInstagram />
            </a>
          </div>
          <div className="social-note">
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home2;
