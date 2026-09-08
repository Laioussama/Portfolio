import React from "react";
import { SiWindows, SiVisualstudiocode, SiMicrosoftsharepoint } from "react-icons/si";
import { FaFirefoxBrowser, FaMicrosoft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={36} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaMicrosoft fontSize={30} />
        <div className="tech-icons-text">Microsoft 365</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiMicrosoftsharepoint fontSize={34} />
        <div className="tech-icons-text">SharePoint</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiVisualstudiocode fontSize={36} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaFirefoxBrowser fontSize={30} />
        <div className="tech-icons-text">Firefox</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
