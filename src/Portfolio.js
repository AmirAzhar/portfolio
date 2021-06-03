// Import utilities
import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";

//Import components
import ProjectModal from "./components/ProjectModal";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { projects } from "./resources/data";

const Experience = () => {
  const [modalShow, setModalShow] = useState(false);
  const [state, setState] = useState({
    title: "",
    thumbnail: "",
    alt: "",
    body: "",
    subtitle: "",
    contentImages: [],
  });

  return (
    <div className="content">
      <div className=" header"> Past Projects </div>

      <div className="projectGrid">
        {projects.map((proj) => (
          <Image
            className="projectThumbnail"
            src={proj.thumbnail}
            alt={proj.alt}
            responsive
            rounded
            onClick={() => {
              setModalShow(true);
              setState(proj);
            }}
          />
        ))}
        <ProjectModal
          content={state}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <div className="header"> Experience & Education</div>

      <ExperienceTimeline />
    </div>
  );
};

export default Experience;
