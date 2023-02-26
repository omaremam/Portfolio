import * as React from "react";
import "./index.scss";
import { AiFillPhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Data } from "./DescriptionContent";
import ProjectDescription from "./ProjectDescription";

const IndexPage = () => {
  const [descriptionContent, setDescriptionContent] = React.useState(Data[0]);

  return (
    <div className="main-container">
      {console.log(descriptionContent)}
      <div className="inner-container-wrap">
        <div className="container">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="inner-container">
          <div className="column">
            <div className="upper-row">
              <p onClick={()=>{setDescriptionContent(Data[0])}} style={{cursor:"pointer"}}>Portfolio</p>
              <div className="socials">
                <AiFillPhone size={25} />
                <AiFillGithub size={25} />
                <AiFillLinkedin size={25} />
              </div>
            </div>

            <div className="middle-row">
              <div className="description-content">
                {!descriptionContent.title  && <p className="welcome">Hello.</p>}
                <ProjectDescription project={descriptionContent} />
              </div>
              <div className="project-selection">
              <p className="project-title">Projects</p>

                <div className="container">
                  <div className="left left-mini"></div>
                  <div className="right right-mini"></div>
                </div>
                <div className="projects-outline">
                <a onClick={()=>setDescriptionContent(Data[1])}>Sehatech</a>
                <a>Courzerve</a>
                <a>LoRa Network</a>
                <a>Brantu</a>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="container-reversed">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
