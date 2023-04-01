import * as React from "react";
import "./index.scss";
import { AiFillPhone, AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Data } from "./DescriptionContent";
import ProjectDescription from "./ProjectDescription";
import MoreInformation from "./MoreInformation";

const IndexPage = () => {
  const [descriptionContent, setDescriptionContent] = React.useState(Data[0]);
  const [currentGradientClass, setCurrentGradientClass] = React.useState({
    left: "gradient-in-left",
    right: "gradient-in-right",
  });

  const [innerCurrentGradientClass, setInnerCurrentGradientClass] =
    React.useState({
      left: "gradient-in-left",
      right: "gradient-in-right",
    });

  const [moreInformationToggled, toggleMoreInformation] = React.useState(false);

  return (
    <>
      <div className="main-container" id="main">
        <div
          className="inner-container-wrap"
          onMouseEnter={() =>
            setCurrentGradientClass({
              left: "gradient-in-left",
              right: "gradient-in-right",
            })
          }
          onMouseLeave={() =>
            setCurrentGradientClass({
              left: "gradient-out-left",
              right: "gradient-out-right",
            })
          }
        >
          <div className="container">
            <div className={"left " + currentGradientClass.left}></div>
            <div className={"right " + currentGradientClass.right}></div>
          </div>

          <div className="inner-container">
            <div className="column">
              <div className="upper-row">
                <p
                  onClick={() => {
                    setDescriptionContent(Data[0]);
                    toggleMoreInformation(false);
                  }}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Omar Emam's Portfolio
                </p>
                <div className="socials">
                  <a href="tel:+201098402457">
                    <AiFillPhone size={25} />
                  </a>
                  <a href="mailto:oemam3051@gmail.com">
                  <AiFillMail size={25} />
                  </a>
                  <a href="https://www.linkedin.com/in/omar-emam-0034b81b0/" target="_blank">
                  <AiFillLinkedin size={25} />
                  </a>
                </div>
              </div>

              {moreInformationToggled ? (
                <MoreInformation data={descriptionContent.moreInformation} />
              ) : (
                <div className="middle-row">
                  <div className="description-content">
                    {!descriptionContent.title && (
                      <p className="welcome">Hello.</p>
                    )}
                    <ProjectDescription project={descriptionContent} />
                    {descriptionContent !== Data[0] && descriptionContent.moreInformation && (
                      <a
                        className="animate"
                        style={{ width: "fit-content", margin: "20px" }}
                        onClick={() => {
                          toggleMoreInformation(!moreInformationToggled);
                        }}
                      >
                        More information
                      </a>
                    )}
                  </div>
                  <div className="project-selection">
                    <p className="project-title">Projects</p>

                    <div className="container">
                      <div
                        className={
                          "left left-mini " + innerCurrentGradientClass.left
                        }
                      ></div>
                      <div
                        className={
                          "right right-mini " + innerCurrentGradientClass.right
                        }
                      ></div>
                    </div>
                    <div
                      className="projects-outline"
                      onMouseEnter={() =>
                        setInnerCurrentGradientClass({
                          left: "gradient-in-left",
                          right: "gradient-in-right",
                        })
                      }
                      onMouseLeave={() =>
                        setInnerCurrentGradientClass({
                          left: "gradient-out-left",
                          right: "gradient-out-right",
                        })
                      }
                    >
                      <a onClick={() => setDescriptionContent(Data[1])}>
                        Sehatech
                      </a>
                      {console.log(descriptionContent)}
                      <a onClick={() => setDescriptionContent(Data[2])}>
                        Courzerve
                      </a>
                      <a onClick={() => setDescriptionContent(Data[3])}>
                        LoRa Network
                      </a>
                      <a onClick={() => setDescriptionContent(Data[4])}>
                        Brantu
                      </a>
                      <a onClick={() => setDescriptionContent(Data[5])}>
                        SolutionsPlus
                      </a>
                      <a onClick={() => setDescriptionContent(Data[6])}>
                        Vodafone Hackathon 2019
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="container-reversed">
            <div className={"left " + currentGradientClass.left}></div>
            <div className={"right " + currentGradientClass.right}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>OE | Portfolio</title>;
