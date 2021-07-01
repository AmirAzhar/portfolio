import "../css/projectaccordian.css";

import { Accordion, Card, Button, Table } from "react-bootstrap";
import { archiveProjects } from "../resources/data";
import Tags from "./Tags";
const ProjectAccordion = () => {
  return (
    <div className="acc">
      <Accordion defaultActiveKey="1">
        <Card className="accCard">
          <Accordion.Toggle
            className="accBtn"
            as={Button}
            variant="link"
            eventKey="0"
          >
            More Projects
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
                  {archiveProjects.map((proj) => (
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
