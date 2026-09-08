import React from "react";
import { Col, Row } from "react-bootstrap";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import { SiSap, SiPowerbi, SiMicrosoftsharepoint, SiMicrosoftoffice, SiVisualstudiocode } from "react-icons/si";
import { FaTasks } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap fontSize={40} />
        <div className="tech-icons-text">SAP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTasks fontSize={34} />
        <div className="tech-icons-text">ServiceNow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={36} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsharepoint fontSize={36} />
        <div className="tech-icons-text">SharePoint</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice fontSize={36} />
        <div className="tech-icons-text">Microsoft 365</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={36} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Techstack;
