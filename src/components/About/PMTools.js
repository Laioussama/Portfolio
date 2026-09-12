import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaProjectDiagram } from "react-icons/fa";
import {
  SiJira,
  SiConfluence,
  SiPowerbi,
  SiMiro,
  SiScrumalliance,
  SiMicrosoftexcel,
  SiMicrosoftteams,
  SiTableau,
  SiTrello,
} from "react-icons/si";

function PMTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <FaProjectDiagram fontSize={34} />
        <div className="tech-icons-text">MS Project</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiJira fontSize={34} />
        <div className="tech-icons-text">Jira</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiConfluence fontSize={34} />
        <div className="tech-icons-text">Confluence</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiMiro fontSize={34} />
        <div className="tech-icons-text">Miro</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiPowerbi fontSize={34} />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiScrumalliance fontSize={34} />
        <div className="tech-icons-text">Scrum / Kanban</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiTableau fontSize={34} />
        <div className="tech-icons-text">Tableau</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={34} />
        <div className="tech-icons-text">Excel</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiMicrosoftteams fontSize={34} />
        <div className="tech-icons-text">MS Teams</div>
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiTrello fontSize={34} />
        <div className="tech-icons-text">Trello / Asana</div>
      </Col>
    </Row>
  );
}

export default PMTools;
