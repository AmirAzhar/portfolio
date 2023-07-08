// Styles
import "./portfolio.css";

// Components
import ProjectModal from "../../components/projectModal";
import ExperienceTimeline from "../../components/experienceTimeline";
import ProjectAccordion from "../../components/projectAccordian";

// Resources
import { projects } from "../../resources/data";

const Portfolio = () => {
  return (
    <div className="content">
      <div className="header">Past Projects</div>
      <div className="projectGrid">
        {projects.map((proj) => (
          <ProjectModal content={proj} />
        ))}
      </div>
      <ProjectAccordion />
      <div className="header"> Experience & Education</div>
      <ExperienceTimeline />
    </div>
  );
};

export default Portfolio;
