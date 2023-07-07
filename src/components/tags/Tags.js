import "./tags.css";

import { Col } from "react-bootstrap";

const Tags = ({ text }) => {
  return (
    <div>
      <Col className="skills">{text}</Col>
    </div>
  );
};

export default Tags;
