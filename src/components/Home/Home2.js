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
            <p className="home-about-body">
              I’m a <b className="purple">Digital Project Manager and Trainer</b> passionate about helping organizations evolve, modernize, and adopt solutions that truly make a difference. Over the years, I’ve led transformation initiatives across diverse environments — from finance and industry to media and large-scale services — always with the same objective: turning strategic ambitions into concrete, operational results.
              <br />
              <br />
              I specialize in <b className="purple">digital transformation, dématérialisation, and change management</b>, with a strong ability to navigate complex ecosystems, align stakeholders, and deliver projects that are both scalable and meaningful. My experience spans transversal project leadership, process optimization, and the deployment of digital tools that improve efficiency and user experience.
              <br />
              <br />
              I’m particularly interested in how organizations adapt to new digital challenges, how teams embrace change, and how technology can simplify workflows while empowering people. Whether I’m managing a multi-site digital program, supporting teams through change, or designing training modules, I bring structure, clarity, and a collaborative mindset.
              <br />
              <br />
              Whenever possible, I enjoy building bridges between strategy and execution — ensuring that every project is not only well-delivered, but well-adopted.
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
