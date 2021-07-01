import "./contact.css";

import { Row } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import Typist from "react-typist";

const Contact = () => {
  return (
    <div className="content">
      <div className="contactContent">
        <Row className="justify-content-md-center">
          <h1 className="contactLine">
            <Typist blink={true}>
              <span>Want to collaborate on a project?</span>
              <Typist.Backspace count={26} delay={1000} />
              <span> hire me?</span>
              <Typist.Backspace count={9} delay={1000} />
              <span> compliment my website?</span>
            </Typist>
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
