import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Initial Template by SB</h3> */}
          {/* <h3>Made with React.js</h3> */}
          <div className="construction-container">
            <LuConstruction />
            <h3> Site Under Construction </h3>
            <LuConstruction />
          </div>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3>Copyright © {year} SB</h3> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="raquel.o.chin@mail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://raqueque.itch.io/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaItchIo />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/raquelochin/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
