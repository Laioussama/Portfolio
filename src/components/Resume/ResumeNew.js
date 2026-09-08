import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineMail } from "react-icons/ai";
import JumpToTop from "../JumpToTop";

const EMAIL = "oussamalaiche1@gmail.com";
const MAILTO =
  `mailto:${EMAIL}` +
  "?subject=" +
  encodeURIComponent("Full CV request — Portfolio") +
  "&body=" +
  encodeURIComponent(
    "Hello Oussama,\n\nI visited your portfolio and would like to receive your full CV.\n\nCompany / context:\nRole:\n\nThank you."
  );

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center" }}>
          <Col md={9} className="resume-cv">
            <h1 className="cv-title">
              Curriculum Vitae — <strong className="purple">Preview</strong>
            </h1>

            <div className="cv-card">
              <h2 className="cv-name">Oussama LAÏCHE</h2>
              <p className="cv-headline">
                Digital Project Manager · Change Management Specialist · Digital
                Transformation Trainer — Paris, Île-de-France, France
              </p>

              <h3 className="cv-section-label">Summary</h3>
              <p className="cv-body">
                IT / ERP consultant with 8+ years of expertise in solution
                deployment and change management. Successfully steered digital
                programmes across 50+ international sites under strict governance
                and PRINCE2 / ITIL practices. Specialised in digital
                transformation, communication and adoption, with strong
                expertise in user training and process optimisation.
              </p>

              <h3 className="cv-section-label">Highlights</h3>
              <ul className="cv-highlights">
                <li>
                  Global ERP standardisation (MES, LES, VM, SAP) across 33 Alstom
                  sites in 4 regions, coordinating 33 regional business experts.
                </li>
                <li>
                  Project governance &amp; enterprise architecture for WMS / CRM
                  / dématérialisation programmes at METRO France.
                </li>
                <li>
                  Digital Transformation &amp; Lean 4.0 PMO for Customer Support
                  and Smart MRO at Safran.
                </li>
              </ul>

              {/* Locked / blurred remainder — full CV available on request only */}
              <div className="cv-locked" aria-hidden="true">
                <div className="cv-locked-blur">
                  <h3 className="cv-section-label">Professional experience</h3>
                  <p className="cv-body">
                    Groupe CAT — Deputy Director, Application Studies &amp;
                    Development (DSI) &amp; IS Project Manager. Safran — PMO Diag
                    4.0. Alstom — Change Management Engineer. METRO France — Scrum
                    Master / IT Project Manager &amp; Change Manager. Full
                    timeline, detailed missions, measurable results and tooling
                    are available in the complete document.
                  </p>
                  <p className="cv-body">
                    Education — PhD, Communication &amp; Media (LMU München);
                    M.Sc., Digital Business Management &amp; Computer Systems
                    Analysis; M1 Management (Paris École de Management).
                    Languages — French, English, Arabic, German.
                  </p>
                  <p className="cv-body">
                    Additional sections: certifications, full mission
                    descriptions, KPI results, governance frameworks, e-learning
                    &amp; LMS deliverables, and professional references.
                  </p>
                </div>
                <div className="cv-locked-overlay">
                  <span>🔒 Full CV available on request</span>
                </div>
              </div>
            </div>

            <div className="cv-cta">
              <p>
                Only a short preview of my CV is shown here. To request the full
                CV, please contact me directly by email.
              </p>
              <Button variant="primary" href={MAILTO} className="cv-cta-btn">
                <AiOutlineMail />
                &nbsp;Request Full CV
              </Button>
            </div>
          </Col>
        </Row>

        <JumpToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
