import "../css/experiencetimeline.css";

// Import utilities
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Row } from "react-bootstrap";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

//Import components
import { experience } from "../resources/data";
import Tags from "./Tags";

const ExperienceTimeline = () => {
  return (
    <div>
      <VerticalTimeline>
        {experience.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#112240", color: "#d9e2ec" }}
            contentArrowStyle={{ borderRight: "7px solid  #112240" }}
            iconStyle={{ background: "#112240", color: "#ff5aac" }}
            icon={exp.subtitle === "Huawei" ? <MdWork /> : <GiGraduateCap />}
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
