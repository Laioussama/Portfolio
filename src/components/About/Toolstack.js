import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWindows, SiVisualstudiocode } from "react-icons/si";
import { FaFirefoxBrowser, FaInternetExplorer } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={36} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaInternetExplorer fontSize={28} />
        <div className="tech-icons-text">Internet Explorer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiVisualstudiocode fontSize={36} />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaFirefoxBrowser fontSize={28} />
        <div className="tech-icons-text">Firefox</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
