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
  const [toggle, setToggle] = useState(1);
  const [archiveProjectsData] = useGetFirebaseData("archiveProjects");

  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="acc">
      <Accordion defaultActiveKey="1">
        <Card className="accCard">
          <Accordion.Toggle
            className={toggle ? "accBtn" : "accBtnActive"}
            as={Button}
            variant="link"
            eventKey="0"
            onClick={handleClick}
          >
            {toggle ? "More Projects" : "Close Projects"}
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
