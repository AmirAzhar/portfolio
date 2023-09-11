// Styles
import "react-vertical-timeline-component/style.min.css";
import "./experienceTimeline.css";

// Packages
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// Boostrap
import { Row } from "react-bootstrap";

// Icons
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

// Components
import Tags from "../tags";

// Hooks
import useGetFirebaseCollection from "../../hooks/useGetFirebaseCollection";

const ExperienceTimeline = () => {
  const [experienceData] = useGetFirebaseCollection("experience");
  return (
    <div>
      <VerticalTimeline>
        {experienceData.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#112240", color: "#d9e2ec" }}
            contentArrowStyle={{ borderRight: "7px solid  #112240" }}
            iconStyle={{ background: "#112240", color: "#ff5aac" }}
            icon={
              exp.title === "BEng Computer Engineering" ? (
                <GiGraduateCap />
              ) : (
                <MdWork />
              )
            }
            date={exp.date}
          >
            <div className="vertical-timeline-element-title">{exp.title}</div>
            <div className="vertical-timeline-element-subtitle">
              {exp.subtitle}
            </div>
            <div className="vertical-timeline-element-body">
              {exp.body}
              <br />
              <br />

              {exp.extra}
              <Row className="skillsRow">
                {exp.skills.map((text) => (
                  <Tags text={text} />
                ))}
              </Row>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
