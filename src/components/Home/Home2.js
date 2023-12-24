import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              I'm a software engineer with a serious love for design.
              I'm that tech enthusiast who hangs out at the intersection of creativity, technology, and the gaming universe. 🎮✨
              <br /><br />
              My coding journey is like a rollercoaster fueled by curiosity, a knack for cool visuals, and a real soft spot for user-friendly stuff. 🌈🚀
              <br /><br />
              I believe my knack for tech and love for design make a killer combo.
              Every project I dive into gets a sprinkle of innovation, thanks to my unique blend of skills.
              Let's team up and bring some seriously awesome vibes to the digital world!🌐✨
              <br /><br /><br />
              I like classics such as
              <i>
                <b className="purple"> C++ and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Games and Design </b> and
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
