// Styles
import "./portfolio.css";

// Components
import ProjectModal from "../../components/projectModal";
import ExperienceTimeline from "../../components/experienceTimeline";
import ProjectAccordion from "../../components/projectAccordian";

// Hooks
import useGetFirebaseData from "../../hooks/useGetFirebaseData";

const Portfolio = () => {
  const [projectsData] = useGetFirebaseData("projects");
  console.log(projectsData.value);
  return (
    <div className="content">
      <div className="header">Past Projects</div>
      <div className="projectGrid">
        {projectsData.value.map((proj) => (
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
