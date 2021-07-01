import "./css/contact.css";

import { Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="content">
      <div className="contactContent">
        <Row className="justify-content-md-center">
          <h1 className="contactLine">
            Want <span style={{ color: "#ff5aac" }}>me</span> for an internship
            position?
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
