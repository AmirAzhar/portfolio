import { useState } from "react";

// Styles
import "./projectModal.css";

// MUI
import Modal from "@mui/material/Modal";

// Components
import ProjectCarousel from "../projectCarousel";
import Loader from "../loader";

// Icons
import { IoIosClose } from "react-icons/io";

// Hooks
import useGetFirebaseItem from "../../hooks/useGetFirebaseItem";

const ProjectModal = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlList, loading] = useGetFirebaseItem(content.contentImages);

  function transformDataForCarousel(data) {
    return data.map((url, id) => ({
      id,
      url,
    }));
  }

  return (
    <div className="projectModal">
      {loading ? (
        <Loader size="small" />
      ) : (
        <div>
          <img
            className="projectThumbnail"
            src={urlList[0]}
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
              <ProjectCarousel
                contentImages={transformDataForCarousel(urlList.slice(1))}
              />
              <h3 className="projectTitle">{content.title}</h3>
              <h5 className="projectSubtitle">{content.subtitle}</h5>
              <h6 className="projectBody1">{content.body1}</h6>
              <h6 className="projectBody2">{content.body2}</h6>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
