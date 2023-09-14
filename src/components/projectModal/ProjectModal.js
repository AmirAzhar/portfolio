import { useState } from "react";

// Styles
import "./projectModal.css";

// MUI
import Modal from "@mui/material/Modal";

// Components
import ProjectCarousel from "../projectCarousel";

// Icons
import { IoIosClose } from "react-icons/io";

const ProjectModal = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="projectModal">
      <div>
        <img
          className="projectThumbnail"
          src={content.thumbnail}
          alt={content.alt}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
          <div className="modal-content">
            <IoIosClose
              className="closeModalButton"
              onClick={() => setIsModalOpen(false)}
            />
            <ProjectCarousel contentImages={content.contentImages} />
            <h3 className="projectTitle">{content.title}</h3>
            <h5 className="projectSubtitle">{content.subtitle}</h5>
            <h6 className="projectBody1">{content.body1}</h6>
            <h6 className="projectBody2">{content.body2}</h6>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectModal;
