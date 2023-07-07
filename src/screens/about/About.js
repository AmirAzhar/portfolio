import "./about.css";

import myPic from "../../resources/images/me.jpg";

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
              <span
                style={{ color: "#ff5aac", fontFamily: "var(--header-font)" }}
              >
                Amir Azhar
              </span>{" "}
              and welcome to my personal website! I am a Software Engineer who
              loves web development, starting from back in 2019. It all started
              when I wanted to create a website as a virtual gift for my
              girlfriend (now fiancée!) during the Covid-19 lockdown!
              <br />
              <br />I have a very strong interest in frontend web development.
              Despite not being enrolled in any web development modules in{" "}
              <span
                style={{ color: "#ff5aac", fontFamily: "var(--header-font)" }}
              >
                National University of Singapore (NUS),{" "}
              </span>
              I taught myself various skills and tools, starting from plain
              CSS/HTML/Javascript, to now being proficient in industry prominent
              technologies such as React, Next.js, Angular and many more!
              <br />
              <br />I am now employed full-time as a Software Engineer at{" "}
              <span
                style={{ color: "#ff5aac", fontFamily: "var(--header-font)" }}
              >
                VISA Singapore,{" "}
              </span>
              but I am continuously looking out for more opportunities to grow
              and develop myself into a "T-shaped" individual!
            </h1>
          </div>
          <div>
            <img className="aboutImg" src={myPic} alt="Amir Azhar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
