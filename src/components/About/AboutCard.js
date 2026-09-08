import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Oussama LAÏCHE</span>, a{" "}
            <span className="purple">Digital Project Manager &amp; Change Management specialist</span>{" "}
            based in <span className="purple">Paris, France</span>.
            <br />
            For 8+ years I have deployed <span className="purple">IT / ERP solutions</span> and led
            digital transformation programmes for international groups, from framing and governance to
            deployment, user training and adoption.
            <br />
            I turn strategy into operational results by aligning business, IT and integrators around a
            clear RACI, roadmap and KPI dashboard — and by making sure every rollout is genuinely
            adopted on the ground.
            <br />
            <br />I hold a <span className="purple">PhD</span> in Communication &amp; Media
            (Ludwig-Maximilians-Universität München) and an <span className="purple">M.Sc.</span> in
            Digital Business Management &amp; Computer Systems Analysis.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6px" }}>
            <span className="purple">Experience highlights</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Groupe CAT</b> — Deputy Director, Application Studies &amp;
              Development (DSI) &amp; IS Project Manager
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Safran</b> — PMO, Digital Transformation &amp; Lean 4.0 (Smart MRO /
              Customer Support)
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Alstom</b> — Change Management Engineer, global ERP standardisation
              across 33 industrial sites in 4 regions
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>METRO France</b> — Scrum Master / IT Project Manager &amp; Change
              Manager, project governance &amp; enterprise architecture
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginBottom: "6px" }}>
            Outside of work, I enjoy activities that keep me creative and inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing violin 🎻
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turn strategy into adoption."{" "}
          </p>
          <footer className="blockquote-footer">Oussama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
