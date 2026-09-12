import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import JumpToTop from "../JumpToTop";

const EMAIL = "oussamalaiche1@gmail.com";
const CV_REQUEST_SUBJECT = "Resume Request — Your Portfolio";
const CV_REQUEST_BODY =
  "Hello Mr. Oussama,\n\n" +
  "I came across your profile and found your background in digital transformation, " +
  "ERP deployment and change management very interesting.\n\n" +
  "Could you please send me your full resume? I would love to learn more about your " +
  "experience and discuss it further.\n\n" +
  "Looking forward to hearing from you.\n\n" +
  "Best regards,\n";

// mailto: is handled by the OS/browser itself, so it works even inside
// restrictive in-app browsers (LinkedIn, WhatsApp, ...) that often block
// Google's sign-in redirect used by the Gmail compose link below.
const MAILTO =
  `mailto:${EMAIL}` +
  `?subject=${encodeURIComponent(CV_REQUEST_SUBJECT)}` +
  `&body=${encodeURIComponent(CV_REQUEST_BODY)}`;

// Opens Gmail's compose window directly in the browser. Offered as an
// alternative since it requires the visitor to already be signed into a
// Google account in that browser tab.
const GMAIL_COMPOSE =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(EMAIL)}` +
  `&su=${encodeURIComponent(CV_REQUEST_SUBJECT)}` +
  `&body=${encodeURIComponent(CV_REQUEST_BODY)}`;

function ResumeNew() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (err) {
      // Clipboard API unavailable (very old browser / no HTTPS) — fall back
      // to a manual selection so the address can still be copied.
      window.prompt("Copy my email address:", EMAIL);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
              <div className="cv-cta-actions">
                <Button variant="primary" href={MAILTO} className="cv-cta-btn">
                  <AiOutlineMail />
                  &nbsp;Request Full CV
                </Button>
                <Button
                  variant="outline-light"
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noreferrer"
                  className="cv-cta-btn"
                >
                  <SiGmail />
                  &nbsp;Open in Gmail
                </Button>
              </div>
              <button
                type="button"
                className="cv-copy-email"
                onClick={copyEmail}
              >
                {copied ? <AiOutlineCheck /> : <AiOutlineCopy />}
                &nbsp;{copied ? "Copied!" : EMAIL}
              </button>
            </div>
          </Col>
        </Row>

        <JumpToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
