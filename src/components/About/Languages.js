import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";


const Languages = () => {
  const languages = [
    { language: 'Portuguese', level: 'Advanced' },
    { language: 'English', level: 'Advanced' },
    { language: 'Japanese', level: 'Intermediate' },
    { language: 'Spanish', level: 'Intermediate' },
    { language: 'French', level: 'Beginner' },
  ];

  return (
    <Row className="languages">
      <Row>
        <Col className="language">
          Portuguese
        </Col>
        <Col className="lang-lvl"> 
          Native <FaCircle /><FaCircle /><FaCircle /><FaCircle /><FaCircle />
        </Col>
      </Row>

      <Row>
        <Col className="language">
          English
        </Col>
        <Col className="lang-lvl">
          Advanced <FaCircle /><FaCircle /><FaCircle /><FaCircle /><FaCircle />
        </Col>
      </Row>
      <Row>
        <Col className="language">
          Japanese
        </Col>
        <Col className="lang-lvl">
          Intermediate <FaCircle /><FaCircle /><FaCircle /><FaRegCircle /><FaRegCircle />
        </Col>
      </Row>
      <Row>
        <Col className="language">
          Spanish
        </Col>
        <Col className="lang-lvl">
          Intermediate <FaCircle /><FaCircle /><FaCircle /><FaRegCircle /><FaRegCircle />
        </Col>
      </Row>
      <Row>
        <Col className="language">
          French
        </Col>
        <Col className="lang-lvl">
          Beginner <FaCircle /><FaRegCircle /><FaRegCircle /><FaRegCircle /><FaRegCircle />
        </Col>
      </Row>
    </Row>
  )
};

export default Languages;