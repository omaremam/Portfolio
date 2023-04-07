import React from "react";
import "./index.scss"

function ProjectDescription(props) {
  return (
    <>
      <div className="project-container" key={props.key}>
        {props.title && <p className="project-title">{props.title}</p>}
        <div className="description-container">
          <div className="gradient-bar" />
          <div className="project-description">
            <p className="description-text">{props.text}</p>
            <div className="links">{props.components}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDescription;
