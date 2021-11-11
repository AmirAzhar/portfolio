import "./about.css";

import myPic from "../resources/me.jpg";

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
              and welcome to my personal website! I am a computer engineering
              undergraduate, and my interest in web development began back in
              2019. It all started when I wanted to create a website as a
              virtual gift for my girlfriend during the Covid-19 lockdown!
              <br />
              <br />
              Today, I have a very strong interest in frontend web development.
              Despite not being enrolled in any web development modules in{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                National University of Singapore (NUS), I taught myself various
                skills and technologies, starting from plain
                CSS/HTML/Javascript, to now utilising tech stacks such as MERN.
              </span>
              <br />
              <br />
              For the upcoming{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                May 2022
              </span>
              , I will be graduating and hence am looking for{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                Frontend Enginner / Fullstack Developer Full-time Roles
              </span>
              , where I can continue pursuing my interest in frontend
              development.
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
