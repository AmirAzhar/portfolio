import "./contact.css";

import { Row } from "react-bootstrap";
import Typist from "react-typist";

const Contact = () => {
  return (
    <div className="content">
      <div className="contactContent">
        <Row className="justify-content-md-center">
          <h1 className="contactLine">
            <Typist>
              <span>Want to </span>
              <br />
              <Typist.Delay ms={500} />
              <span>collaborate on a project?</span>
              <Typist.Backspace count={26} delay={1000} />
              <span>hire me?</span>
              <Typist.Backspace count={8} delay={1000} />
              <span>compliment my website?</span>
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
