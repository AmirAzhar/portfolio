import { Row, Col } from "react-bootstrap";
import myPic from "./resources/me.jpg";

const About = () => {
  return (
    <div className="content">
      <div className="aboutContent">
        <div className="header" style={{ marginBottom: "5px" }}>
          About Me
        </div>
        <div className="aboutGrid">
          <div>
            <h1 className="aboutText">
              Hi! My name is{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                Amir Azhar
              </span>{" "}
              and welcome to my personal webiste! I am a computer engineering
              undergraduate, who started gaining interest in web development
              back in 2019. It all started when i wanted to make a webiste as a
              virtual gift for a friend during the Covid-19 lockdown!
              <br />
              <br />
              Today, I have a strong interest in Machine Learning, Artifical
              Intelligence and Cybersecurity, all developed through modules I've
              taken in{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                National University of Singapore (NUS)
              </span>
              . As an engineer, I am also well-versed in hardware programming
              which I have definitely strengthen during my internship at{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                Huawei Singapore Research Centre
              </span>
              . <br />
              <br />
              For the upcoming{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                Winter 2021
              </span>
              , I am seeking any web development or software engineering{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                Internship Opportunities
              </span>
              , where I can hone and improve my skills.
            </h1>
          </div>
          <div>
            <img className="aboutImg" src={myPic}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
