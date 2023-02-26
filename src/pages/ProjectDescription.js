import React from "react";
import "./index.scss"

function ProjectDescription(props) {
  return (
    <>
      <div className="project-container" key={props.project.key}>
        {props.project.title && <p className="project-title">{props.project.title}</p>}
        <div className="description-container">
          <div className="gradient-bar" />
          <div className="project-description">
            <p className="description-text">{props.project.text}</p>
            <div className="links">{props.project.components}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDescription;
