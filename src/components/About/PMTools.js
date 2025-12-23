import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaProjectDiagram } from "react-icons/fa";
import { SiPowerbi, SiJira, SiConfluence } from "react-icons/si";

function PMTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <FaProjectDiagram fontSize={34} />
        <div className="tech-icons-text">MS Project</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <SiPowerbi fontSize={34} />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <SiJira fontSize={34} />
        <div className="tech-icons-text">Jira</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <SiConfluence fontSize={34} />
        <div className="tech-icons-text">Confluence</div>
      </Col>
    </Row>
  );
}

export default PMTools;
