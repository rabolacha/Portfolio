import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Interests from "./Interests";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Languages from "./Languages";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ paddingBottom: 50 }} className="heading">
            About Me
          </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="heading" style={{ paddingTop: "50px" }}>
          Technical Skillset
        </h1>

        <Techstack />

        <h1 className="heading" style={{ paddingTop: "50px" }}>
          Tools I use
        </h1>
        <Toolstack />

        <h1 className="heading" style={{ paddingTop: "50px" }}>
          Interests
        </h1>
        <Interests />

        <h1 className="heading" style={{ paddingTop: "50px" }}>
          Languages
        </h1>
        <Languages/>
    

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
