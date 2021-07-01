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
              and welcome to my personal website! I am a computer engineering
              undergraduate, and my interest in web development began back in
              2019. It all started when I wanted to create a website as a
              virtual gift for my girlfriend during the Covid-19 lockdown!
              <br />
              <br />
              Today, I have a strong interest in Machine Learning, Artificial
              Intelligence and Cybersecurity. These interests were sparked from
              the modules I had taken in{" "}
              <span style={{ color: "#ff5aac", fontFamily: "Mont Reg" }}>
                National University of Singapore (NUS)
              </span>
              . As an engineer, I am also well-versed in hardware programming
              which I have definitely strengthened during my internship at{" "}
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
              , where I can hone and further improve my skills.
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
