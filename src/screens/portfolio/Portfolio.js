// Styles
import "./portfolio.css";

// Components
import ProjectModal from "../../components/projectModal";
import ExperienceTimeline from "../../components/experienceTimeline";
import ProjectAccordion from "../../components/projectAccordian";

// Hooks
import useGetFirebaseCollection from "../../hooks/useGetFirebaseCollection";

const Portfolio = () => {
  const [projectsData] = useGetFirebaseCollection("projects");
  return (
    <div className="content">
      <div className="header">Past Projects</div>
      <div className="projectGrid">
        {projectsData.map((proj) => (
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
