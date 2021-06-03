import { Col } from "react-bootstrap";

const Tags = ({ text }) => {
  return (
    <div>
      <Col className="skills" md="auto">
        {text}
      </Col>
    </div>
  );
};

export default Tags;
