import "./projectmodal.css";

import { Modal } from "react-bootstrap";

import ProjectCarousel from "../projectCarousel";

const ProjectModal = ({ content, onHide, show }) => {
  return (
    <Modal
      content={content}
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ProjectCarousel contentImages={content.contentImages} />
        <h3 className="projectTitle">{content.title}</h3>
        <h5 className="projectSubtitle">{content.subtitle}</h5>
        <h6 className="projectBody1">{content.body1}</h6>
        <h6 className="projectBody2">{content.body2}</h6>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
