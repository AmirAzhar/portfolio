// Bootstrap
import { Accordion, Card, Button, Table } from "react-bootstrap";

// Styles
import "./projectAccordian.css";

// Components
import Tags from "../tags";

// Hooks
import useGetFirebaseData from "../../hooks/useGetFirebaseData";

import { useState } from "react";
const ProjectAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [archiveProjectsData] = useGetFirebaseData("archiveProjects");

  return (
    <div className="acc">
      <Accordion defaultActiveKey="1">
        <Card className="accCard">
          <Accordion.Toggle
            className={isOpen ? "accBtnActive" : "accBtn"}
            as={Button}
            variant="link"
            eventKey="0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close Projects" : "More Projects"}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accContent">
              <Table className="projectTable" responsive="md">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Project</th>
                    <th>During</th>
                    <th>Description</th>
                    <th style={{ textAlign: "center" }}>Technologies/Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {archiveProjectsData.value.map((proj) => (
                    <tr>
                      <td className="tdyear">{proj.year}</td>
                      <td className="tdtitle">{proj.title}</td>
                      <td className="tdfrom">{proj.from}</td>
                      <td className="tddesc">
                        {proj.desc}
                        <a className="projLink" href={proj.link}>
                          {proj.link}
                        </a>
                      </td>
                      <td className="tdtech">
                        {proj.tech.map((text) => (
                          <Tags text={text} />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
