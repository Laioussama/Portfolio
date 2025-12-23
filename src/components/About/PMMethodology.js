import React from "react";
import { Col, Row } from "react-bootstrap";

function PMMethodology() {
  const methods = ["ITIL4", "Prince2", "Agile", "CycleV", "SAFe", "TOGAF"];
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
