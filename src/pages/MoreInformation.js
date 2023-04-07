import React from "react";
import "./index.scss";
import Carousel from "./Carousel";

function MoreInformation(props) {
  console.log(props)
  return (
    <div className="info-container">
      <div className="info-top-section">
        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            letterSpacing: "1.5px",
            marginTop: "50px",
          }}
        >
          {props.data?.title}
        </p>
      </div>

      <div className="info-stack-section">
        {props.data?.stacks.main.map((stack) => {
          return (
            <div className="stack-row">
              {stack.typeLogo}
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "1px",
                  width: "20px ",
                }}
              />
              {stack.logo}
            </div>
          );
        })}
      </div>

      <div className="info-project-section">
        {props.data?.projects.map((project) => {
          let containerStyling = "description-m-container";
          if (!project.images) containerStyling += " noImg";
          return (
            <div style={{ margin: "auto", width: "100%"}}>
              <p
                style={{
                  color: "#ccc",
                  fontSize: "18px",
                  letterSpacing: "1.5px",
                  marginTop: "50px",
                }}
              >
                {project.title}
              </p>
              <div className={containerStyling}>
                <div className="description-container">
                  <div style={{ width: "5px" }} className="gradient-bar" />
                  <p className="description-text" style={{ width: "75%" }}>
                    {project.description}
                  </p>
                </div>
                {project.images && <Carousel data={project.images} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreInformation;
