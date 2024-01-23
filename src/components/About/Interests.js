import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoGameController, IoLanguageSharp } from "react-icons/io5";
import { MdAirplaneTicket , MdDraw } from "react-icons/md";
import { FaPhotoVideo, FaPaintBrush } from "react-icons/fa";

function Interests() {
  return (
    <>
      <Row className="skills" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <IoGameController/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <IoLanguageSharp/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <MdAirplaneTicket />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <FaPhotoVideo />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <FaPaintBrush />
        </Col>

        
        
      </Row>
    </>
  );
}

export default Interests;
