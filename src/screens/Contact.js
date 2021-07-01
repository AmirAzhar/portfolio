import "./contact.css";

import { Row } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";

const Contact = () => {
  return (
    <div className="content">
      <div className="contactContent">
        <Row className="justify-content-md-center">
          <h1 className="contactLine">
            <TypeWriterEffect
              startDelay={100}
              cursorColor="white"
              multiText={[
                "Want to collaborate on a project?",
                "Want to hire me?",
                "Want to compliment my website?",
              ]}
              typeSpeed={100}
              scrollArea={document}
            />
          </h1>
        </Row>
        <Row className="justify-content-md-center">
          <a href="mailto:amir97azhar@gmail.com" className="contactMe">
            Say Hello
          </a>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
