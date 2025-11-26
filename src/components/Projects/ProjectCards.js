import React from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <div className="project-card">
      <img src={props.imgPath} alt={props.title} className="modern-img" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
        <div className={`card-actions ${!props.isBlog && !props.demoLink ? 'justify-content-center' : ''}`}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;