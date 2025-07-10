import React from "react";
// import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/*
        GitHubCalendar is not supported in Create React App as of 2025.
        As a workaround, we display a static image of the contribution graph.
        To update, visit your GitHub profile and right-click the contribution graph to copy the image address.
      */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 180 }}>
        <img
          src="https://ghchart.rshah.org/colinklich"
          alt="Colin Klich's GitHub contribution graph"
          style={{ maxWidth: "100%", background: "#fff", borderRadius: 8, boxShadow: "0 2px 16px #23294622" }}
        />
      </div>
    </Row>
  );
}

export default Github;
