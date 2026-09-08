import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erp from "../../Assets/Projects/codeEditor.png";
import lean from "../../Assets/Projects/leaf.png";
import governance from "../../Assets/Projects/blog.png";
import adoption from "../../Assets/Projects/chatify.png";

const LINKEDIN = "https://www.linkedin.com/in/oussama-laiche-2208a69b/";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Key <strong className="purple">Engagements </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of digital transformation and change management programmes I have led.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              linkLabel="LinkedIn"
              title="Global ERP Standardisation — Alstom"
              description="Led change management for a group-wide ERP rollout (MES, LES, VM, SAP) across 33 industrial sites in 4 regions. Coordinated 33 regional business experts, sequenced the initialisation, testing and deployment phases, enforced a strict project governance (weekly cockpits, kickoffs, retrospectives) and drove adoption through KPI dashboards, integration test scripts and a dedicated LMS."
              ghLink={LINKEDIN}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={governance}
              isBlog={false}
              linkLabel="LinkedIn"
              title="Project Governance & Enterprise Architecture — METRO France"
              description="Structured the framing of WMS, CRM and dématérialisation projects through RACI, roadmaps and budget steering. Centralised project data from every division to make reporting reliable, automated BI refreshes with cloud bots, administered the JIRA backlog and sprint planning, and trained project managers on PRINCE2, ITIL 4 and MS Project best practices."
              ghLink={LINKEDIN}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lean}
              isBlog={false}
              linkLabel="LinkedIn"
              title="Digital Transformation & Lean 4.0 — Safran"
              description="Managed a portfolio of strategic projects accelerating the digitalisation of Customer Support and Smart MRO activities. Supported teams in adopting Lean 4.0 best practices and embedded continuous improvement into the digital roadmap."
              ghLink={LINKEDIN}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adoption}
              isBlog={false}
              linkLabel="LinkedIn"
              title="Change Adoption & User Enablement — METRO / Alstom"
              description="Ran the change portfolio and the 9 levers of change with PRINCE2 practices: impact maps, communication and marketing plans, internal SharePoint sites, UX/UI workshops, e-learning modules and train-the-trainer sessions for managers, key users and business teams — plus post-go-live support via ServiceNow."
              ghLink={LINKEDIN}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
