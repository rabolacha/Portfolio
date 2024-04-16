import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eu.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTextWidth } from "react-icons/fa";
import Type from "./Type";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1 style={{ paddingBottom: 50 }} className="heading">
            Hi There!
          </h1>

<Col md={7} className="home-about-description">
          <h3 className="heading-name">
            I'm
            <strong className="main-name"> Raquel Chin</strong>
            , a
          </h3>

          <div style={{ textAlign: "left", fontSize: "12px" }}>
            <Type />
          </div>



          
            {/* <h1 style={{ fontSize: "2.6em" }}>
              Bridging <span className="purple">Creativity</span> and <span className="purple">Code</span>: A Design-Driven Software Engineer
            </h1> */}
            <p className="home-about-body">
              I'm a creative software engineer passionate about design.
              As a tech enthusiast, I unite creativity, technology, and the gaming universe. 🎮✨
              <br /><br />
              My journey was fueled by curiosity, a love for cool visuals, and a preference for user-friendly solutions.
              <br /><br />
              I believe the combination of my technical skills and design passion brings innovation to every project. Let's collaborate and bring positive vibes to the digital world!🌐✨
              <br /><br /><br />
              I like classics such as
              <i>
                <b className="purple"> Javascript </b>
              </i>
              but also love 
              <i>
                <b className="purple"> Figma and Photoshop </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Design and Games</b> and
                also in areas related to{" "}
                <b className="purple">
                  3D Modeling and Multimedia Content Production
                </b>
                .
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>*/}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>

            <div className="home-contacts">
              <h2 className="contacts-title">Contacts</h2>
              <Row><IoIosMail className="contact-icon"/> <p>raquel.o.chin@gmail.com</p></Row>
              <Row><FaLinkedin className="contact-icon"/> <p>linkedin.com/in/raquelochin</p> </Row>
              <Row><FaItchIo className="contact-icon"/> <p>raqueque.itch.io</p></Row>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
