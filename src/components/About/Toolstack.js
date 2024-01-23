import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAdobephotoshop,
  SiBlender,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiFigma,
  SiUnity

} from "react-icons/si";
import { FaWindows, FaDocker } from "react-icons/fa";
import { FaFigma, FaUnity } from "react-icons/fa";
import { SiMedibangpaint } from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row className="skills" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBlender />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiUnity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFigma />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobephotoshop />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobepremierepro />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobeillustrator />
        </Col>
        
      </Row>
    </>
  );
}

export default Toolstack;
