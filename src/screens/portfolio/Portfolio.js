import "./portfolio.css";

// Import utilities
import { useState } from "react";
import { motion } from "framer-motion";

//Import components
import ProjectModal from "../../components/projectModal";
import ExperienceTimeline from "../../components/experienceTimeline";
import ProjectAccordion from "../../components/projectAccordian";
import { projects } from "../../resources/data";

const Portfolio = () => {
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
      <div className="header"> Past Projects </div>

      <div className="projectGrid">
        {projects.map((proj) => (
          <motion.img
            className="projectThumbnail"
            src={proj.thumbnail}
            alt={proj.alt}
            responsive
            rounded
            onClick={() => {
              setModalShow(true);
              setState(proj);
            }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
        <ProjectModal
          content={state}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>

      <ProjectAccordion />
      <div className="header"> Experience & Education</div>

      <ExperienceTimeline />
    </div>
  );
};

export default Portfolio;
