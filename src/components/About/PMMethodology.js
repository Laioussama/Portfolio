import React from "react";
import { Col, Row } from "react-bootstrap";

function PMMethodology() {
  const methods = [
    "PRINCE2",
    "ITIL 4",
    "Agile / Scrum",
    "SAFe",
    "Lean 4.0",
    "Kanban",
    "Cycle V",
    "TOGAF",
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {methods.map((m) => (
        <Col xs={6} md={2} className="tech-icons" key={m}>
          <div className="tech-icons-text" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
            {m}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default PMMethodology;
