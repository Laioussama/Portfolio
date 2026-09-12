import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaUsersCog,
  FaChartLine,
  FaCoins,
  FaComments,
  FaHandshake,
  FaGavel,
  FaBullhorn,
  FaLightbulb,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

// Senior-manager skill set: managerial/leadership capabilities combined with
// the technical and digital fluency expected at that level.
function Leadership() {
  const skills = [
    { icon: <FaUsersCog fontSize={32} />, label: "Team Leadership" },
    { icon: <FaHandshake fontSize={32} />, label: "Stakeholder Management" },
    { icon: <FaCoins fontSize={32} />, label: "Budget & P&L Oversight" },
    { icon: <FaComments fontSize={32} />, label: "Executive Communication" },
    { icon: <FaGavel fontSize={32} />, label: "Governance & Risk" },
    { icon: <FaBalanceScale fontSize={32} />, label: "Vendor & Contract Management" },
    { icon: <FaBullhorn fontSize={32} />, label: "Change Leadership" },
    { icon: <FaLightbulb fontSize={32} />, label: "Digital Strategy & Innovation" },
    { icon: <FaChartLine fontSize={32} />, label: "Data-Driven Decision Making" },
    { icon: <FaShieldAlt fontSize={32} />, label: "Cybersecurity & Compliance Awareness" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((s) => (
        <Col xs={6} md={3} className="tech-icons" key={s.label}>
          {s.icon}
          <div className="tech-icons-text" style={{ fontSize: "0.85rem" }}>
            {s.label}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Leadership;
