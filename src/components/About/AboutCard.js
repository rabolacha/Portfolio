import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raquel de Oliveira Chin </span>
            from <span className="purple"> Lisbon, Portugal.</span>
            <br />
            I am currently employed as a full-stack developer at Laboratório Nacional de Engenharia Civil.
            <br />
            I have completed a MSc in Computer Science and Engineering at Instituto Superior Técnico, University of Lisbon, with a score of 18/20.
            <br />
            <br />

          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
