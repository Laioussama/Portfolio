import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">LAÏCHE Oussama</span>{" "}
            from <span className="purple">Paris, France</span>.
            <br />I’m currently working as a {"Project Manager in digital transformation"} in {"International Consulting Firm"}.
            <br />I have a passion for {"Transformation adoption, ERP/IT tools implementation, project management, and emerging technologies"}.
            <br />I’m currently working in <span className="purple">Multinational aerospace campany</span> called {"Safran Group"}.

            <br />I hold an Integrated PhD in{"Communication and Networks"} specializing in {"Audio visual engineering"} from {"Constantine university"}.
            <br />I hold an Integrated M.Sc. in{"Digital Business Management"} specializing in {"Digital Innovation"} from {"Paris university"}.
            <br />
            <br />
            Outside of , I love engaging in activities that keep me
            creative and inspired:
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
            "Keep it up!"{" "}
          </p>
          <footer className="blockquote-footer">Oussama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
