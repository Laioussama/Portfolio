import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I’m a <b className="purple">Digital Project Manager &amp; Change Management specialist</b> with
              8+ years of experience deploying <b className="purple">IT / ERP solutions</b> and driving
              digital transformation across international organisations — including Groupe CAT, Safran,
              Alstom and METRO. My mission is simple: turn strategic ambitions into concrete,
              measurable operational results.
              <br />
              <br />
              I have led digital rollouts across <b className="purple">50+ sites in 4 regions</b> under
              strict governance (<b className="purple">PRINCE2, ITIL 4, Agile / SAFe, Lean 4.0</b>),
              orchestrating every phase from framing and integration testing to deployment and
              post-go-live support. I align business, IT and integrators around a clear RACI, roadmap
              and KPI dashboard, and I keep programmes on time and on scope.
              <br />
              <br />
              I’m equally focused on <b className="purple">adoption</b>: I design LMS and e-learning
              modules, train managers, key users and business teams, and build the communication that
              makes new tools stick. Every project I deliver is not only well-executed, but
              well-adopted.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
